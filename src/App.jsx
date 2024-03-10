import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./index.css"
import Hero from './Components/Hero/Hero'

const App = () => {
  return (
    <div>
      <Navbar fixed="top"/>
      <Hero/>
    </div>
  )
}

export default App
