import React from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2'
import { QueryConfig } from '../ProductList'
import classNames from 'classnames'
import { ProductListConfig } from 'src/types/product.type'
import { sortBy, order as orderConstant } from 'src/constants/product'
import { NavLink, createSearchParams, useNavigate } from 'react-router-dom'
import { path } from 'src/constants/path'
import { omit } from 'lodash'

interface Props {
  queryConfig: QueryConfig
  pageSize: number
}
export default function SortProductList({ queryConfig, pageSize }: Props) {
  const page = Number(queryConfig.page)
  const { sort_by = sortBy.createdAt, order } = queryConfig
  const navigate = useNavigate()
  const isActive = (
    sortByValue: Exclude<ProductListConfig['sort_by'], undefined>
  ) => {
    return sort_by === sortByValue
  }
  const handleSort = (
    sortByValue: Exclude<ProductListConfig['sort_by'], undefined>
  ) => {
    navigate({
      pathname: path.home,
      search: createSearchParams(
        omit(
          {
            ...queryConfig,
            sort_by: sortByValue
          },
          ['order']
        )
      ).toString()
    })
  }

  const handleSelectSoft = (
    orderValue: Exclude<ProductListConfig['order'], undefined>
  ) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        sort_by: sortBy.price,
        order: orderValue
      }).toString()
    })
  }
  return (
    <div className='bg-gray-300 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex flex-wrap items-center gap-2'>
          <div>Sort by</div>
          <button
            className={classNames(
              ' h-8 px-4 text-center text-sm capitalize transition duration-300',
              {
                'bg-orange-500 text-white hover:bg-orange-500 ': isActive(
                  sortBy.view
                ),
                'bg-white text-black  hover:bg-orange-500 hover:text-white':
                  !isActive(sortBy.view)
              }
            )}
            onClick={() => handleSort(sortBy.view)}
          >
            Popular
          </button>
          <button
            className={classNames(
              ' h-8 px-4 text-center text-sm capitalize transition duration-300',
              {
                'bg-orange-500 text-white hover:bg-orange-500': isActive(
                  sortBy.createdAt
                ),
                'bg-white text-black  hover:bg-orange-500 hover:text-white':
                  !isActive(sortBy.createdAt)
              }
            )}
            onClick={() => handleSort(sortBy.createdAt)}
          >
            Latest
          </button>
          <button
            className={classNames(
              ' h-8 px-4 text-center text-sm capitalize transition duration-300',
              {
                'bg-orange-500 text-white hover:bg-orange-500': isActive(
                  sortBy.sold
                ),
                'bg-white text-black  hover:bg-orange-500 hover:text-white':
                  !isActive(sortBy.sold)
              }
            )}
            onClick={() => handleSort(sortBy.sold)}
          >
            Top Sales
          </button>
          <select
            id='price'
            className={classNames(
              ' h-8 px-4 text-center text-sm capitalize outline-none',
              {
                ' bg-orange-500 text-white': isActive(sortBy.price),
                'bg-white text-black': !isActive(sortBy.price)
              }
            )}
            value={order || ''}
            onChange={(event) =>
              handleSelectSoft(
                event.target.value as Exclude<
                  ProductListConfig['order'],
                  undefined
                >
              )
            }
          >
            <option
              value=''
              disabled
              className='bg-white text-black transition'
            >
              Price
            </option>
            <option
              value={orderConstant.asc}
              className='bg-white text-black transition'
            >
              {' '}
              Price: Low to high
            </option>
            <option
              value={orderConstant.desc}
              className='bg-white text-black transition'
            >
              Price: High to low
            </option>
          </select>
        </div>
        <div className='flex items-center gap-1 '>
          <p>{page}</p>
          <p>/</p>
          <p>{pageSize}</p>
          {page === 1 ? (
            ''
          ) : (
            <NavLink
              to={{
                pathname: path.home,
                search: createSearchParams({
                  ...queryConfig,
                  page: (page - 1).toString()
                }).toString()
              }}
              className='mx-2 cursor-pointer rounded bg-white px-3  py-2 shadow-sm transition hover:bg-cyan-500 hover:text-white'
            >
              <HiOutlineChevronLeft />
            </NavLink>
          )}

          {page === pageSize ? (
            ''
          ) : (
            <NavLink
              to={{
                pathname: path.home,
                search: createSearchParams({
                  ...queryConfig,
                  page: (page + 1).toString()
                }).toString()
              }}
              className='mx-2 cursor-pointer rounded bg-white px-3  py-2 shadow-sm transition hover:bg-cyan-500 hover:text-white'
            >
              <HiOutlineChevronRight />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  )
}
