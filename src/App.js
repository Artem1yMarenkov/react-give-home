import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { Provider, useSelector } from 'react-redux'

import { getAuth } from './redux/selectors'

import Auth from './Pages/Auth/Auth'
import Home from './Pages/Home/Home'
import AddNew from './Pages/AddNew/AddNew'
import NoMatch from './Pages/NoMatch/NoMatch'
import './App.scss'

/**
 * 1. Вызвать авторизацию
 * 2. Если не авторизован, то на страницу входа
 * 3. Если авторизован, то на главную
 */

function App() {
  const navigate = useNavigate()
  const { isAuth, token } = useSelector(getAuth)

  // Check Authenticition
  useEffect(() => {
    const token = localStorage.getItem('token')
    !token && navigate('/auth')
  }, [])

  return (
    <section className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="addnew" element={<AddNew />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </section>
  )
}

export default App
