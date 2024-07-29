import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Buy, Navbar , Transform} from './components'
import {Routes,Route} from 'react-router-dom'
import Home from './container/Home/Home'
import Footer from './components/Footer/Footer'
import Registration from './components/Registration/Registration'
import Login from './components/Login/Login'
import CheckoutList from './container/CheckoutList/CheckoutList'
import Search from './container/Search/Search'
function App() {


  return (
    <>
      <Navbar/>
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/checkout' element={<CheckoutList/>}/>
          <Route path='/buy' element={<Buy/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>  
        <Footer/>
    </>
  )
}

export default App
