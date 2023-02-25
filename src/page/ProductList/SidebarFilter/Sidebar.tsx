import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiQueueList, HiFunnel } from 'react-icons/hi2'
import Input from 'src/component/Input'
import Button from 'src/component/Button'

export default function Sidebar() {
  return (
    <div className='py-4'>
      <div className='category px-3 pb-5'>
        <NavLink
          to='#'
          className='text-md flex items-center gap-1  font-semibold'
        >
          <HiQueueList />
          All Category
        </NavLink>
        <div className='category-list flex flex-col items-start gap-2 py-4'>
          <NavLink to='#' className='text-sm font-semibold'>
            Men Clothes
          </NavLink>
          <NavLink to='#' className='text-sm'>
            Phone
          </NavLink>
          <NavLink to='#' className='text-sm'>
            Men Clothes
          </NavLink>
        </div>
      </div>
      <div className='search-filter pb-5'>
        <NavLink
          to='#'
          className='text-md flex items-center gap-1 px-3 font-semibold'
        >
          <HiFunnel />
          Search filter
        </NavLink>
      </div>

      <div className='px-3 pb-5'>
        <div className='text-sm'>Price Range</div>
        <form className=''>
          <div className='flex items-start pt-2'>
            <Input
              type='text'
              placeholder='min'
              name='from'
              classNameInput='focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
            />
            <div className='mx-2 mt-2 shrink-0'>-</div>
            <Input
              type='text'
              name='from'
              className='grow'
              placeholder='max'
              classNameInput='focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
            />
          </div>
          <Button className='w-full bg-orange-500 p-2 font-medium text-white'>
            APPLY
          </Button>
        </form>
      </div>
      <div className='px-3 pb-5 '>
        <div className='mb-2 text-sm'>Rating</div>
        <div>
          <div className='flex items-center'>
            <svg
              aria-hidden='true'
              className='h-5 w-5 text-yellow-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>First star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
            <svg
              aria-hidden='true'
              className='h-5 w-5 text-yellow-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Second star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
            <svg
              aria-hidden='true'
              className='h-5 w-5 text-yellow-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Third star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
            <svg
              aria-hidden='true'
              className='h-5 w-5 text-yellow-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Fourth star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
            <svg
              aria-hidden='true'
              className='h-5 w-5 text-gray-300 dark:text-gray-500'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Fifth star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
            <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
              4.95 out of 5
            </p>
          </div>
        </div>
      </div>
      <div className='px-3 pb-5 '>
        <Button className='w-full bg-orange-500 p-2 font-medium text-white'>
          CLEAR ALL
        </Button>
      </div>
    </div>
  )
}
