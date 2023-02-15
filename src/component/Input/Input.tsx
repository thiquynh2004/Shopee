import React from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  className?: string
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
}

export default function Input({ type, errorMessage, className, placeholder, name, register, rules }: Props) {
  return (
    <div className={className}>
      <input
        className='focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
        type={type}
        autoComplete='on'
        placeholder={placeholder}
        {...register(name, rules)}
      />
      <p className='text-xs italic text-red-500'>{errorMessage}</p>
    </div>
  )
}
