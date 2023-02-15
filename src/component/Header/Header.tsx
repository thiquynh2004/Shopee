import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import {
  HiOutlineBellAlert,
  HiOutlineQuestionMarkCircle,
  HiOutlineGlobeAlt,
  HiOutlineShoppingCart,
  HiChevronDown
} from 'react-icons/hi2'
import { useFloating } from '@floating-ui/react'
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const { x, y, strategy, refs } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen
  })
  return (
    <div className=' bg-zinc-800 text-white'>
      <Popover className='relative px-10 text-white'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex items-center justify-between py-2 md:justify-start md:space-x-10'>
            <div className='hidden items-center justify-start gap-4 text-sm  md:flex md:flex-1 lg:w-0  lg:flex-1'>
              <div>
                <NavLink to='#'>Seller Centre</NavLink>
              </div>
              <div>
                <NavLink to='#'>Join as Seller</NavLink>
              </div>
              <div>
                <NavLink to='#'>Download</NavLink>
              </div>
              <div>
                <NavLink to='#'>Follow us on </NavLink>
              </div>
            </div>

            <div className='hidden items-center justify-end gap-4 text-sm md:flex md:flex-1 lg:w-0'>
              <button className='flex items-center'>
                <HiOutlineBellAlert />
                Notifications
              </button>

              <NavLink to='#' className='flex items-center'>
                <HiOutlineQuestionMarkCircle /> Help
              </NavLink>
              <NavLink to='#' className='flex items-center' ref={refs.setReference}>
                <HiOutlineGlobeAlt />
                English
                <HiChevronDown />
              </NavLink>

              {isOpen && (
                <div
                  ref={refs.setFloating}
                  style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                    width: 'max-content'
                  }}
                >
                  Tooltip
                </div>
              )}
              <NavLink to='#' className='flex items-center'>
                Sign Up
              </NavLink>
              <NavLink to='#' className='flex items-center'>
                Sign In
              </NavLink>
            </div>
            <div className='-my-2 -mr-2 md:hidden'>
              <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                <span className='sr-only'>Open menu</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
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
          <Popover.Panel focus className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'>
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
                  <NavLink to='#' className='text-base font-medium text-gray-900 hover:text-gray-700'>
                    Pricing
                  </NavLink>

                  <NavLink to='#' className='text-base font-medium text-gray-900 hover:text-gray-700'>
                    Docs
                  </NavLink>
                </div>
                <div>
                  <p className='mt-6 text-center text-base font-medium text-gray-500'>
                    Existing customer?{' '}
                    <NavLink to='#' className='text-indigo-600 hover:text-indigo-500'>
                      Sign in
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <div className='flex items-center justify-between px-10 py-4 '>
        <div className='flex w-1/6'>
          <NavLink to='/' className='flex items-center text-2xl'>
            <img src='shopee.png' alt='shopee' className='h-16 w-16' />
            Shopee
          </NavLink>
        </div>
        <div className='w-4/6'>
          <form className='flex items-center'>
            <label htmlFor='simple-search' className='sr-only'>
              Search
            </label>
            <div className='relative w-full'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                <svg
                  aria-hidden='true'
                  className='h-5 w-5 text-gray-500 dark:text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <input
                type='text'
                id='simple-search'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                placeholder='Search'
                required
              />
            </div>
            <button
              type='submit'
              className='ml-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <svg
                className='h-5 w-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
              <span className='sr-only'>Search</span>
            </button>
          </form>
          <div className='flex gap-2 py-1 text-xs'>
            <p>Dep</p>
            <p>Dep</p>
            <p>Dep</p>
          </div>
        </div>
        <div className='flex w-1/6 justify-center text-4xl'>
          <HiOutlineShoppingCart />
        </div>
      </div>
    </div>
  )
}
