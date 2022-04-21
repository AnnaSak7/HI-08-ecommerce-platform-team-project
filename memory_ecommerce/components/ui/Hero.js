import React from 'react'

const img='https://res.cloudinary.com/annasak/image/upload/v1650439452/heroImage_xzxma6.png'
const Hero = () => {
  return (
    
    <div id="hero">
      <img id="hero-image" src={img} alt="Hero" />
    </div>
  )
}

export default Hero