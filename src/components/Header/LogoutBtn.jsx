import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../../store/authSlice'
import authService from '../../appwrite/auth'
import Button from '../Button'


function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })
    }
  return (
    <Button
    className={'inline-block px-4 py-3 mt-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full text-white shadow-lg shadow-indigo-500/50'}
    onClick={logoutHandler}
    ><b>Logout</b></Button>
  )
}

export default LogoutBtn