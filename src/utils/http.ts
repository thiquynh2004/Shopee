import { setProfile } from './auth'
/* eslint-disable no-empty */
import { getAccessTokenFromLCSStorage, setSaveAccessToken, clearLocalStorage } from './auth'
import { toast } from 'react-toastify'
import { HttpStatusCode } from './../constant/httpStatusCode'
import axios, { AxiosInstance } from 'axios'
import { AuthResponse } from 'src/types/auth.type'
import { path } from 'src/constant/path'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLCSStorage()
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === path.login || url == path.register) {
          const data = response.data as AuthResponse
          this.accessToken = (response.data as AuthResponse).data.access_token
          setSaveAccessToken(this.accessToken)
          setProfile(data.data.user)
        } else if (url === '/logout') {
          ;(this.accessToken = ''), clearLocalStorage()
        }
        return response
      },
      function (error) {
        if (error.response.status !== HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance
export default http
