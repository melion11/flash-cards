import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import { Route } from '@/common'
import { PrivateRoutes } from '@common/routes/private-routes.tsx'
import { privateRoutes, publicRoutes } from '@common/routes/router-settings.tsx'
import { Header, Toast } from '@components/ui'

const AppLayout = () => {
  return (
    <>
      <Toast />
      <Header />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Navigate to={Route.NotFound} />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
    ],
  },
])

export const Router = () => <RouterProvider router={router} />
