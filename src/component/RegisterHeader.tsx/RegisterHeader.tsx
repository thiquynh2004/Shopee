import React, { Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, useMatch } from 'react-router-dom'

export default function RegisterHeader() {
  const checkUrl = useMatch('/register')
  const isRegister = Boolean(checkUrl)
  return (
    <Popover className='relative bg-white px-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex items-end gap-4 lg:w-0 lg:flex-1'>
            <NavLink to='#'>
              <span className='sr-only'>Your Company</span>
              <img className='h-8 w-auto sm:h-10' src='shopee.png' alt='' />
            </NavLink>
            <h1 className='text-xl font-semibold'>
              {isRegister ? 'REGISTER' : 'LOGIN'}{' '}
            </h1>
          </div>

          <div className='-my-2 -mr-2 md:hidden'>
            <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
            <NavLink
              to='#'
              className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Anymore questions?
            </NavLink>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'
        >
          <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                    alt='Your Company'
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className='space-y-6 py-6 px-5'>
              <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                <NavLink
                  to='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Pricing
                </NavLink>

                <NavLink
                  to='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Docs
                </NavLink>
              </div>
              <div>
                <p className='mt-6 text-center text-base font-medium text-gray-500'>
                  Existing customer?{' '}
                  <NavLink
                    to='#'
                    className='text-indigo-600 hover:text-indigo-500'
                  >
                    Sign in
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
