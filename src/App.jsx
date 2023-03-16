import React, { useState } from 'react'
import WelcomePage from './Pages/WelcomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {



  return (
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<WelcomePage />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
