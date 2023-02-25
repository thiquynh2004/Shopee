import React from 'react'
import Sidebar from './SidebarFilter'
import SortProductList from './SortProductList'
import ProductItem from './ProductItem'
import useQueryParams from 'src/hooks/useQueryParams'
import { useQuery } from '@tanstack/react-query'
import { productAPI } from 'src/api/productAPI'
import Pagination from 'src/component/Pagination'
import { ProductListConfig } from 'src/types/product.type'
import { omitBy, isUndefined } from 'lodash'
export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}
export default function ProductList() {
  const queryParams = useQueryParams()
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit || '10',
      sort_by: queryParams.sort_by,
      exclude: queryParams.exclude,
      name: queryParams.name,
      order: queryParams.order,
      price_min: queryParams.price_min,
      price_max: queryParams.price_max,
      rating_filter: queryParams.rating_filter
    },
    isUndefined
  )

  const { data } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return productAPI.getAllProducts(queryConfig as ProductListConfig)
    },

    keepPreviousData: true
  })
  return (
    <div className='relative py-6'>
      <div className='container px-6'>
        {data && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
              <Sidebar />
            </div>
            <div className='col-span-9 bg-gray-200 p-4'>
              <SortProductList
                queryConfig={queryConfig}
                pageSize={data.data.data.pagination.page_size}
              />
              <div className='xl:grid:cols-5 mt-6  grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {data.data.data.products.map((product, index) => (
                  <div className='col-span-1' key={index}>
                    <ProductItem product={product} />
                  </div>
                ))}
              </div>
              <Pagination
                queryConfig={queryConfig}
                pageSize={data.data.data.pagination.page_size}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
