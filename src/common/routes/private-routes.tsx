import { Navigate, Outlet } from 'react-router-dom'

import { Route } from '@/common'
import { PageLoader } from '@components/ui/page-loader'

export const PrivateRoutes = () => {
  const isAuth = true
  const isLoading = false

  if (isLoading) {
    return <PageLoader circle />
  }

  return isAuth ? <Outlet /> : <Navigate to={Route.SignIn} />
}
