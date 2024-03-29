import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./index.css"
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import CommentCards from './Components/CommentCards/CommentCards'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar fixed="top"/>
      <Hero/>
      <Title subTitle={"OUR PROGRAM"} title={"What We Offer"}/>
      <Program/>
      <About/>
      <Title subTitle={"GALLERY"} title={"Campus Photos"}/>
      <Campus/>
      <Title subTitle={"TESTIMONIALS"} title={"What Student Says"}/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App
