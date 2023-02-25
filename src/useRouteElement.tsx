import React, { useContext } from 'react'
import ProductList from './page/ProductList'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Login from './page/Login'
import Register from './page/Register'
import RegisterLayout from './layout/RegisterLayout/RegisterLayout'
import MainLayout from './layout/MainLayout'
import { AppContext } from './context/app.context'
import { path } from './constants/path'

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
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
          path: path.profile,
          element: (
            <MainLayout>
              <ProductList />
            </MainLayout>
          )
        }
      ]
    },
    {
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: path.register,
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
