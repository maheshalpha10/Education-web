
import React from 'react'
import Navbar from './component/Navbar/Navbar'
import './index.css'
import Hero from './component/Hero/Hero'
import Program from './component/Program/Program'
import Title from './component/Title/Title'
import About from './component/About/About'
import Campus from './component/Campus/Campus'
import Tesstimonial from './component/Testimonial/Tesstimonial'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our Program' title='what we offer'/>
      <Program/>
    
      <About/>
      <Title subtitle='Gallery' title='Campus Photo'/>
      <Campus/>
      <Title subtitle='testimonials' title='What student says'/>
      <Tesstimonial/>
      <Title subtitle='contact us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
            </div>
     
      
    </div>
  )
}

export default App

