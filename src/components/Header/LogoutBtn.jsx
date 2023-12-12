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
    className={'inline-block px-6 py-2 bg-white rounded-full'}
    onClick={logoutHandler}
    ><b>Logout</b></Button>
  )
}

export default LogoutBtn