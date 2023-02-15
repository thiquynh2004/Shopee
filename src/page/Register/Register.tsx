import { useMutation } from '@tanstack/react-query'
import _ from 'lodash'
import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerAccount } from 'src/api/authAPI'
import Input from 'src/component/Input'
import { ResponseAPI } from 'src/types/utils.type'
import { getRules } from 'src/utils/rules'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'

export interface FormData {
  email: string
  password: string
  confirmPassword: string
}
export default function Register() {
  const {
    register,
    handleSubmit,
    // watch,
    getValues,
    setError,
    formState: { errors }
  } = useForm<FormData>()
  const rules = getRules(getValues)
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirmPassword'>) => registerAccount(body)
  })
  const onSubmit = handleSubmit((data) => {
    const body = _.omit(data, ['confirmPassword'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
        toast.success(data.data.message)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ResponseAPI<Omit<FormData, 'confirmPassword'>>>(error)) {
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
              setError(key as keyof Omit<FormData, 'confirmPassword'>, {
                message: formError[key as keyof Omit<FormData, 'confirmPassword'>],
                type: 'Server'
              })
            })
          }
        }
        console.log(error)
      }
    })
  })

  return (
    <div className='bg-orange-500'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 py-20  sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 lg:pr-10 '>
          <div className='sm:col-span-2 sm:col-start-2 md:col-span-2 md:col-start-2 lg:col-span-2 lg:col-start-4'>
            <div className='w-full '>
              <form className='mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md' onSubmit={onSubmit}>
                <h1 className='mb-2 block py-2 text-lg font-bold text-gray-700'>Register</h1>
                <Input
                  className='mb-2'
                  name='email'
                  type='email'
                  placeholder='Enter your email'
                  register={register}
                  rules={rules.email}
                  errorMessage={errors.email?.message}
                />
                <Input
                  className='mb-2'
                  name='password'
                  type='password'
                  placeholder='Enter your password'
                  register={register}
                  rules={rules.password}
                  errorMessage={errors.password?.message}
                />
                <Input
                  className='mb-2'
                  name='confirmPassword'
                  type='password'
                  placeholder='Enter your confirmPassword'
                  register={register}
                  rules={rules.confirmPassword}
                  errorMessage={errors.confirmPassword?.message}
                />
                <div className='flex items-center justify-between'>
                  <button
                    className='focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none'
                    type='submit'
                  >
                    Sign Up
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
                    Do you already have an account?
                    <NavLink to='/login' className='text-decoration-line text-red-600'>
                      Login
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
