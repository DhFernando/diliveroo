import React from 'react'
import {Outlet, Navigate} from 'react-router-dom' 
import { useSelector } from 'react-redux'

const ProtectedRoutes = () =>{
  const { userLoggedIn } = useSelector(state=> state.user);

  return (
    <>
      { userLoggedIn ? <Outlet/> : <Navigate to='/login' />}
    </>
  )
}

export default ProtectedRoutes
