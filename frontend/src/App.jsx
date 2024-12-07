import React, { lazy } from 'react'
import {Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'

const UserLogout = lazy(() => import('./pages/UserLogout'))
const CaptainLogout = lazy(() => import('./pages/CaptainLogout'))
const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path='/login' element={<UserLogin />} />
      <Route path='/signup' element={<UserSignup />} />
      <Route path='/captain-login' element={<CaptainLogin />} />
      <Route path='/captain-signup' element={<CaptainSignup />} />
      <Route path='/home' element={
        
        <Home />
      
      } />
      <Route path='/user-logout' element={
        <UserProtectWrapper>
        <UserLogout/>
        </UserProtectWrapper>
      } />

      <Route path='/captain-home' element={
        <CaptainProtectWrapper>
        <CaptainHome/>
        </CaptainProtectWrapper>
      } />
      <Route path='/captain-logout' element={
        <CaptainProtectWrapper>
        <CaptainLogout/>
        </CaptainProtectWrapper>
      } />
    </Routes>
  )
}

export default App