import React from 'react'
import { NavLink } from 'react-router-dom'
import { Product } from 'src/types/product.type'
import { formatCurrency } from 'src/utils/utils'
import ProductRating from './ProductRating'

interface Props {
  product: Product
}
export default function ProductItem({ product }: Props) {
  return (
    <NavLink to='#'>
      <div className='hover: translate-y-[-0.0625] rounded-sm bg-white shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-md'>
        <div className='relative w-full pt-[100%]'>
          <img
            src={product.image}
            alt={product.name}
            className='absolute top-0 left-0 w-full bg-white object-cover'
          />
          <div className='overflow-hidden p-2'>
            <div className='min-h[1.75rem] text-sm line-clamp-2'>
              {product.name}
            </div>
            <div className='mt-3 flex items-center'>
              <div className='max-w-[50%] truncate text-gray-500 line-through'>
                <span className='text-sm'>₫</span>
                <span className='text-sm'>
                  {formatCurrency(product.price_before_discount)}
                </span>
              </div>
              <div className='ml-1 truncate text-orange-600'>
                <span className='text-sm'>₫</span>
                <span className='text-sm'>{formatCurrency(product.price)}</span>
              </div>
            </div>
            <div className='mt-3 flex items-center justify-start'>
              <ProductRating product={product} />
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  )
}
