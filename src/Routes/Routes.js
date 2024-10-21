import React, { useMemo } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { TOKEN } from '../api/localStorageKeys'

const PrivateRoute = () => {
  const token = TOKEN();
  const authToken = useMemo(() => token, [token])
  return (
    authToken ? <Outlet /> : <Navigate to='/' />
  )
}

export default PrivateRoute