import React from 'react'
import HeroImg  from './images/illustration-intro.svg'
import Button from './Button'

function Hero() {
  return (
    <div className='hero bg-daner' >
      <div className="hero-content">
          <div className="hero-text bg-warng">
            <h1 className='fw700' >Bring everyone together to build  better products.</h1>
            <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view</p>
            <Button />
            
          </div>
          <div className="img-container bg-sucess">
            {/* <HeroImg /> */}
            <img src={HeroImg} alt="" srcset="" />
          </div>
      </div>
        
    </div>
  )
}

export default Hero