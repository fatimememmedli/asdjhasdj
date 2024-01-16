import React from 'react'
import Navbar from '../navbar/Navbar'
import "./hero.scss"
function Hero() {
  return (
    <div className='hero'>
      <Navbar/>
     <div className="text-hero">
        <div className="head-text">
        <p>Special Dish <span>.</span></p>
        </div>
        <div className='foot-head'>
<p>By Chef Francis Smith</p>
        </div>
     </div>

    </div>
  )
}

export default Hero
