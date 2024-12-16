// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { UserDataContext } from './context/UserContext'
import Home from './pages/Home'

const App = () => {

  // this is the way of receiving any time of data using context
  const data = useContext(UserDataContext);
  // console.log(data);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
      </Routes>
    </div>
  )
}

export default App