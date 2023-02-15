import { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirmPassword']?: RegisterOptions }
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email is required'
    },
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: 'Email is not valid'
    },
    maxLength: {
      value: 160,
      message: 'Email has 160 or less characters.'
    },
    minLength: {
      value: 5,
      message: 'Email has 5 or more characters. '
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password is required'
    },
    maxLength: {
      value: 160,
      message: 'Password has 160 or less characters.'
    },
    minLength: {
      value: 6,
      message: 'Password has 6 or more characters. '
    }
  },
  confirmPassword: {
    required: {
      value: true,
      message: 'Confirm password is required'
    },
    maxLength: {
      value: 160,
      message: 'Password has 160 or less characters.'
    },
    minLength: {
      value: 6,
      message: 'Password has 6 or more characters. '
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Password do not match'
        : undefined
  }
})
