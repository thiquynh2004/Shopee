import React from 'react'
import { Product } from 'src/types/product.type'
import { formatNumberToSocialStyle } from 'src/utils/utils'

interface Props {
  product: Product
}

export default function ProductRating({ product }: Props) {
  const rating = product.rating
  const handleWidthStar = (order: number) => {
    if (order <= rating) {
      return '100%'
    }
    if (order > rating && order - rating < 1) {
      return rating - Math.floor(rating) * 100 + '%'
    }
    return '0%'
  }
  return (
    <div className='flex items-center'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div className='relative' key={index}>
            <div
              className='absolute top-0 left-0 h-full overflow-hidden'
              style={{
                width: handleWidthStar(index + 1)
              }}
            >
              <svg
                enableBackground='new 0 0 15 15'
                viewBox='0 0 15 15'
                x={0}
                y={0}
                className='h-3 w-3 fill-yellow-300 text-yellow-300 '
              >
                <polygon
                  points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeMiterlimit={10}
                />
              </svg>
            </div>
            <svg
              enableBackground='new 0 0 15 15'
              viewBox='0 0 15 15'
              x={0}
              y={0}
              className='h-3 w-3 fill-current text-gray-300 '
            >
              <polygon
                points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit={10}
              />
            </svg>
          </div>
        ))}
      <p className='text-xs'>{formatNumberToSocialStyle(product.sold)} sold</p>
    </div>
  )
}
