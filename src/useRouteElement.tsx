import React from 'react'
import ProductList from './page/ProductList'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Login from './page/Login'
import Register from './page/Register'
import RegisterLayout from './layout/RegisterLayout/RegisterLayout'
import MainLayout from './layout/MainLayout'

function ProtectedRoute() {
  const isAuthenticate = true
  return isAuthenticate ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  const isAuthenticate = false
  return !isAuthenticate ? <Outlet /> : <Navigate to='/' />
}
export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: (
            <MainLayout>
              <ProductList />
            </MainLayout>
          )
        },
        {
          path: '/profile',
          element: (
            <MainLayout>
              <ProductList />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '/',
      element: <RejectedRoute />,
      children: [
        {
          path: '/login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: '/register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    }
  ])
  return routeElements
}
