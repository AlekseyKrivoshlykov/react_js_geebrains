import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = ({auth, component}) => {
//   const {isAuth} = useSelector((store) => store.profile)

  if (!auth) {
    return <Navigate to="/sign_in" />
  }

  return component ? component : <Outlet />
}
