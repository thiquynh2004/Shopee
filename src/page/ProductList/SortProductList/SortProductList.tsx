import React from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2'
export default function SortProductList() {
  return (
    <div className='bg-gray-300 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex flex-wrap items-center gap-2'>
          <div>Sort by</div>
          <button className=' h-8 bg-orange-500 px-4 text-center text-sm capitalize text-white hover:bg-orange-500 hover:text-white'>
            Popular
          </button>
          <button className=' h-8 bg-white px-4 text-center text-sm capitalize text-black hover:bg-orange-500 hover:text-white'>
            Latest
          </button>
          <button className=' h-8 bg-white px-4 text-center text-sm capitalize text-black hover:bg-orange-500 hover:text-white'>
            Top Sales
          </button>
          <select
            id='price'
            className='h-8 rounded-lg border border-gray-300 bg-gray-50 px-4 text-sm text-gray-900 outline-none focus:border-orange-500 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-orange-500 dark:focus:ring-orange-500'
          >
            <option value=''>Price</option>
            <option value='US'>Price: Low to high</option>
            <option value='US'>Price: High to low</option>
          </select>
        </div>
        <div className='flex items-center gap-1 '>
          <p>1/9</p>
          <button className='rounded bg-white py-2 px-2 font-bold text-black hover:bg-white'>
            <HiOutlineChevronLeft />
          </button>
          <button className='rounded bg-white py-2 px-2 font-bold text-black hover:bg-white'>
            <HiOutlineChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}
