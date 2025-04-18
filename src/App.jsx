import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'
import Quote from './pages/Quote'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/quote' element={<Quote />} />
    </Routes>
  )
}

export default App