import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='Hero container'>
        <div className="hero-text"><h1>We Ensure better education for a better world</h1>
        <p>empower  student with the knpwledge and skill</p>
        <button className="btn">Explore more <img src={dark_arrow} alt="" srcset="" /></button></div>
    </div>
  )
}

export default Hero