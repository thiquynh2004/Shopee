/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {
  HiOutlineBellAlert,
  HiOutlineQuestionMarkCircle,
  HiOutlineGlobeAlt,
  HiOutlineShoppingCart,
  HiChevronDown
} from 'react-icons/hi2'
import { AppContext } from 'src/context/app.context'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { motion, Variants } from 'framer-motion'
import Popover from '../Popover'
import { authAPI } from 'src/api/authAPI'

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
}
export default function Header() {
  const { isAuthenticated, setIsAuthenticated, setProfile, profile } =
    useContext(AppContext)
  const logoutMutation = useMutation({
    mutationFn: authAPI.logout,
    onSuccess: () => {
      setIsAuthenticated(false)
      setProfile(null)
      toast.success('Logout is successful')
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }
  return (
    <header className='bg-black text-white'>
      <nav className='border-gray-200 px-4 py-2.5 dark:bg-gray-800 lg:px-6'>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
          <div className='hidden items-center  justify-end gap-4 text-sm md:flex md:flex-1 lg:order-2 lg:w-0'>
            <button className='flex items-center'>
              <HiOutlineBellAlert />
              Notifications
            </button>
            <NavLink to='#' className='flex items-center'>
              <HiOutlineQuestionMarkCircle /> Help
            </NavLink>
            <Popover
              renderPopover={
                <>
                  <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className='py-2 px-3 hover:text-orange-500'
                  >
                    Ti???ng Vi???t
                  </motion.button>
                  <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className='py-2 px-3 hover:text-orange-500'
                  >
                    Ti???ng Anh
                  </motion.button>
                </>
              }
            >
              <HiOutlineGlobeAlt />
              English
              <motion.div
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.2 }}
                style={{ originY: 0.55 }}
              >
                <HiChevronDown />
              </motion.div>
            </Popover>

            {isAuthenticated ? (
              <div className='flex cursor-pointer items-center'>
                <Popover
                  renderPopover={
                    <motion.div className='flex flex-col gap-3 px-2 py-2'>
                      <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className=' hover:text-orange-500'
                      >
                        My Account
                      </motion.div>
                      <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className=' hover:text-orange-500'
                      >
                        My purchase
                      </motion.div>
                      <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className=' hover:text-orange-500'
                        onClick={handleLogout}
                      >
                        Logout
                      </motion.div>
                    </motion.div>
                  }
                >
                  <button>{profile?.email}</button>
                  <motion.div
                    variants={{
                      open: { rotate: 180 },
                      closed: { rotate: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                  >
                    <HiChevronDown />
                  </motion.div>
                </Popover>
              </div>
            ) : (
              <>
                <NavLink to='/register' className='flex items-center'>
                  Sign Up
                </NavLink>
                <NavLink to='/login' className='flex items-center'>
                  Sign In
                </NavLink>
              </>
            )}

            <button
              data-collapse-toggle='mobile-menu-2'
              type='button'
              className='ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden'
              aria-controls='mobile-menu-2'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='h-6 w-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                />
              </svg>
              <svg
                className='hidden h-6 w-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
          <div
            className='hidden w-full  items-center  justify-start  gap-4  text-sm md:flex md:flex-1 lg:order-1 lg:flex lg:w-0  lg:flex-1'
            id='mobile-menu-2'
          >
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
        </div>
      </nav>
      <div className='flex items-center justify-between gap-8 px-10 py-4 pb-8'>
        <div className='flex w-1/6'>
          <NavLink to='/' className='flex items-center '>
            <img src='shopee.png' alt='shopee' />
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
              className='ml-2 rounded-lg border border-orange-600 bg-orange-600 p-2.5 text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-blue-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800'
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
        <div className='relative flex w-1/6 justify-center text-4xl'>
          <Popover
            renderPopover={
              <ul className='max-w-md divide-y divide-gray-200 dark:divide-gray-700'>
                <li className='pb-3 sm:pb-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='/docs/images/people/profile-picture-1.jpg'
                        alt='Neil image'
                      />
                    </div>
                    <div className='min-w-0 flex-1'>
                      <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                        Neil Sims
                      </p>
                      <p className='truncate text-sm text-gray-500 dark:text-gray-400'>
                        email@flowbite.com
                      </p>
                    </div>
                    <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                      $320
                    </div>
                  </div>
                </li>
                <li className='py-3 sm:py-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='/docs/images/people/profile-picture-3.jpg'
                        alt='Neil image'
                      />
                    </div>
                    <div className='min-w-0 flex-1'>
                      <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                        Bonnie Green
                      </p>
                      <p className='truncate text-sm text-gray-500 dark:text-gray-400'>
                        email@flowbite.com
                      </p>
                    </div>
                    <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                      $3467
                    </div>
                  </div>
                </li>
                <li className='py-3 sm:py-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='/docs/images/people/profile-picture-2.jpg'
                        alt='Neil image'
                      />
                    </div>
                    <div className='min-w-0 flex-1'>
                      <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                        Michael Gough
                      </p>
                      <p className='truncate text-sm text-gray-500 dark:text-gray-400'>
                        email@flowbite.com
                      </p>
                    </div>
                    <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                      $67
                    </div>
                  </div>
                </li>
                <li className='py-3 sm:py-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='/docs/images/people/profile-picture-5.jpg'
                        alt='Neil image'
                      />
                    </div>
                    <div className='min-w-0 flex-1'>
                      <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                        Thomas Lean
                      </p>
                      <p className='truncate text-sm text-gray-500 dark:text-gray-400'>
                        email@flowbite.com
                      </p>
                    </div>
                    <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                      $2367
                    </div>
                  </div>
                </li>
                <li className='pt-3 pb-0 sm:pt-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='/docs/images/people/profile-picture-4.jpg'
                        alt='Neil image'
                      />
                    </div>
                    <div className='min-w-0 flex-1'>
                      <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                        Lana Byrd
                      </p>
                      <p className='truncate text-sm text-gray-500 dark:text-gray-400'>
                        email@flowbite.com
                      </p>
                    </div>
                    <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                      $367
                    </div>
                  </div>
                </li>
              </ul>
            }
            initialOpen
          >
            <HiOutlineShoppingCart />
          </Popover>
        </div>
      </div>
    </header>
  )
}
