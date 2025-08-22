import React from 'react'
import section8img from "../assets/section8img.png"
const HomeSection9 = () => {
  return (
    <div className='section9 relative'>
        <img src={section8img} alt="rating Background" className='rating-bg absolute bottom-0 right-0 h-180'/>

      <h2>
        <span className="ratings-navisensei__title-text">Try </span>
                  <span className="ratings-navisensei__title-brand">NaviSensei</span>
      </h2>

    <p className="ratings-navisensei__tagline" >
                    No contracts. No commitments. Guaranteed results.*
    </p> 
        <button className='ratings-navisensei__button'>
            Get Started
        </button>
     <p className="ratings-navisensei__disclaimer">* Sign up now to view the pricing structure.</p>

    </div>
  )
}

export default HomeSection9
