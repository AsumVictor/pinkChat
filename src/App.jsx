import React, { useState } from 'react'
import WelcomePage from './Pages/WelcomePage'
import Login from './Pages/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {



  return (
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<WelcomePage />} />
    <Route path='Login' element={<Login />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
