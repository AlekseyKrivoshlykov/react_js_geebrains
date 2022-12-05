import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export const PublicRoute = ({auth, component}) => {

  if (auth) {
    // return <Navigate to="/signin" />
  }

  return component ? component : <Outlet />
}