/* eslint-disable no-empty */
import { clearAccessToken, getAccessTokenFromLCSStorage } from './auth'
import { toast } from 'react-toastify'
import { HttpStatusCode } from './../constant/httpStatusCode'
import axios, { AxiosInstance } from 'axios'

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
        // const { url } = response.config
        // if (url !== '/login' || url == '/register') {
        // } else if (url === '/logout') {
        //   ;(this.accessToken = ''), clearAccessToken()
        // }
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
