import { useMutation } from '@tanstack/react-query'
// import _ from 'lodash'
import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { login } from 'src/api/authAPI'
import Input from 'src/component/Input'
import { ResponseAPI } from 'src/types/utils.type'
import { getRules } from 'src/utils/rules'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { FormData } from '../Register/Register'
import { toast } from 'react-toastify'
export default function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors }
  } = useForm<FormData>()
  const rules = getRules(getValues)
  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirmPassword'>) => login(body)
  })
  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        toast.success(data.data.message)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ResponseAPI<FormData>>(error)) {
          const formError = error.response?.data.data
          // if (formError?.email) {
          //   setError('email', {
          //     message: formError.email,
          //     type: 'Server'
          //   })
          // }
          // if (formError?.password) {
          //   setError('password', {
          //     message: formError.password,
          //     type: 'Server'
          //   })
          // }
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })
  return (
    <div className='bg-orange-500'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 py-24 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 lg:pr-10 '>
          <div className='sm:col-span-2 sm:col-start-2 md:col-span-2 md:col-start-2 lg:col-span-2 lg:col-start-4'>
            <div className='w-full '>
              <form className='mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md' onSubmit={onSubmit}>
                <h1 className='mb-2 block py-2 text-lg font-bold text-gray-700'>Login</h1>
                <Input
                  className='mb-4'
                  name='email'
                  type='email'
                  placeholder='Enter your email'
                  register={register}
                  rules={rules.email}
                  errorMessage={errors.email?.message}
                />
                <Input
                  className='mb-6'
                  name='password'
                  type='password'
                  placeholder='Enter your password'
                  register={register}
                  rules={rules.password}
                  errorMessage={errors.password?.message}
                />
                <div className='flex items-center justify-between'>
                  <button
                    className='focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none'
                    type='submit'
                  >
                    Sign In
                  </button>
                  <NavLink
                    className='inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800'
                    to='#'
                  >
                    Forgot Password?
                  </NavLink>
                </div>
                <div className='text-center '>
                  <p className='py-2 pr-1 text-center text-xs text-gray-500'>
                    Create your account.
                    <NavLink to='/register' className='text-decoration-line text-red-600'>
                      Register
                    </NavLink>
                  </p>
                </div>
                <p className='py-2 text-center text-xs text-gray-500'>©2020 Acme Corp. All rights reserved.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
