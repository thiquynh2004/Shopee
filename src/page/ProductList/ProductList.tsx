import React from 'react'
import Sidebar from './SidebarFilter'
import SortProductList from './SortProductList'
import ProductItem from './ProductItem'

export default function ProductList() {
  return (
    <div className='relative py-6'>
      <div className='container px-6'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <Sidebar />
          </div>
          <div className='col-span-9'>
            <SortProductList />
            <div className='xl:grid:cols-5 mt-6  grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              {Array(30)
                .fill(0)
                .map((_, index) => (
                  <div className='col-span-1' key={index}>
                    <ProductItem />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
