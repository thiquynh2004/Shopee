import React from 'react'
import classNames from 'classnames'
import { QueryConfig } from 'src/page/ProductList/ProductList'
import { NavLink, createSearchParams } from 'react-router-dom'
import { path } from 'src/constants/path'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2'

interface Props {
  queryConfig: QueryConfig
  pageSize: number
}
//page: trang hien tai
//pageSize: tong so trang
// RANGE : khoang cach de hien page tinh tu trang hien tai
const RANGE = 2
export default function Pagination({ queryConfig, pageSize }: Props) {
  const page = Number(queryConfig.page)
  const renderPagination = () => {
    let dotAfter = false
    let dotBefore = false
    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <span
            key={index}
            className='mx-2 cursor-pointer rounded bg-white px-3 py-2 shadow-sm'
          >
            ...
          </span>
        )
      }
      return null
    }
    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <span
            key={index}
            className='mx-2 cursor-pointer rounded bg-white px-3 py-2 shadow-sm'
          >
            ...
          </span>
        )
      }
      return null
    }
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1
        if (
          page <= RANGE * 2 + 1 &&
          pageNumber > page + RANGE &&
          pageNumber < pageSize - RANGE + 1
        ) {
          return renderDotAfter(index)
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (pageNumber < page - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index)
          } else if (
            pageNumber > page + RANGE &&
            pageNumber < pageSize - RANGE + 1
          ) {
            return renderDotAfter(index)
          }
        } else if (
          page >= pageSize - RANGE * 2 &&
          pageNumber > RANGE &&
          pageNumber < page - RANGE
        ) {
          return renderDotBefore(index)
        }
        return (
          <NavLink
            to={{
              pathname: path.home,
              search: createSearchParams({
                ...queryConfig,
                page: pageNumber.toString()
              }).toString()
            }}
            key={index}
            className={classNames(
              'mx-2 flex cursor-pointer items-center rounded border bg-white px-3 shadow-sm ',
              {
                'bg-cyan-500 text-white': pageNumber === page,
                'border-transparent': pageNumber !== page
              }
            )}
          >
            {pageNumber}
          </NavLink>
        )
      })
  }

  return (
    <div className='mt-6 flex flex-wrap justify-center'>
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
          <HiChevronLeft />
        </NavLink>
      )}

      {renderPagination()}
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
          <HiChevronRight />
        </NavLink>
      )}
    </div>
  )
}
