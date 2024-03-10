import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./index.css"
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar fixed="top"/>
      <Hero/>
      <Title subTitle={"OUR PROGRAM"} title={"What We Offer"}/>
      <Program/>
    </div>
  )
}

export default App
