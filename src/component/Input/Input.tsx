/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
  classNameInput?: string
  classNameError?: string
}

export default function Input({
  type,
  errorMessage,
  className,
  placeholder,
  name,
  register,
  rules,
  classNameInput = 'focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none',
  classNameError = 'text-xs italic text-red-500'
}: Props) {
  const registerResult = register && name ? register(name, rules) : {}
  return (
    <div className={className}>
      <input
        className={classNameInput}
        type={type}
        autoComplete='on'
        placeholder={placeholder}
        {...registerResult}
      />
      <p className={classNameError}>{errorMessage}</p>
    </div>
  )
}
