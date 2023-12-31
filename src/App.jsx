import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux' 
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  return !loading ? (
    <div className='min-h-screen flex-wrap flex content-between bg-black'>
      <div className='w-full min-h-screen flex-wrap content-between bg-black'>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main style={{ flex: 1 }}>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  ) : null
}

export default App
