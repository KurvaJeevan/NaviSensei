
import logo from "../assets/navisenseilogo.png"
import hero from "../assets/herosectionimage.png"
import icons from "../assets/herosectionicons.svg"
import rating from "../assets/star.svg"
import stop from "../assets/stop.png"
import gsap from 'gsap'
import { useEffect, useRef } from "react"
import { useGSAP } from "@gsap/react"

const HomeSection1 = () => {


useGSAP(() => {
  const tl = gsap.timeline();

  tl.from("#logo", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    ease: "bounce",
  })
  .from(".hlink", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
    ease: "back.in",
  })
  .from(".hero-title", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  }, "-=0.3")   // start slightly earlier

  .from(".hero-subtitle", {
    x: -100,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)",
  }, "title")

  .from(".heroIcons", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: "elastic.out(1, 0.5)",
  }, "+=0.2")

  .from(".hero-description", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out",
  }, "-=0.5")

  .from(".cta-button", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "elastic.out(1, 0.4)",
  }, "+=0.2")

  .from(".login-btn, .register-btn", {
    x: 400,
    y: -500,
    opacity: 0,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
  }, "-=0.8")

  .from(".heroimage", {
    x: 400,
    opacity: 0,
    duration: 0.5,
    ease: "elastic.out(1,0.8)"
  }, "<")
  .from(".stopimage",{
    y:300,
    opacity:0,
    duration:0.2,
    ease:"power1.out"
  },"<")

  .from(".rating-img", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "back.out(2)",
  }, "<")

  .from(".rating-text", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  }, "-=0.5");
});


  return (
    <>
    <div className='section1'>
      <div id='Header'>
        <div id='part1'>
          <img src={logo} alt="" id='logo' />
        </div>
        <div className='part2'>
          <a href="" className='hlink' >Home</a>
          <a href="" className='hlink' >About Us</a>
          <a href="" className='hlink' >Features</a>
          <a href="" className='hlink' >F.A.Q</a>
        </div>
        <div className='part3'>
          <button className='login-btn'>Login</button>
          <button className='register-btn'>Get Started</button>
        </div>
      </div>

      <div className='herosection perspective-midrange'>
          <img src={stop} alt="" className="stopimage h-[20vw] absolute bottom-[-120px] z-1 left-[33vw]"/>
          <img src={hero} alt="" srcset="" className='heroimage'/>
          <h1 className="hero-title">Your destination for learning</h1>
          <h2 className="hero-subtitle">How to drive</h2>
          <img src={icons} alt="" className='heroIcons'/>
          <p className="hero-description">Join <strong>NaviSensei</strong> today and embark on your journey<br />to become a skilled and responsible driver!</p>
          <div className='footer'>
          <button className="cta-button">join now</button>
          <div className="instructor-rating">
                  <div className="rating-images">
                    <img src={rating} alt="Instructor Rating" className="rating-img" />
                    <img src={rating} alt="Instructor Rating" className="rating-img" />
                    <img src={rating} alt="Instructor Rating" className="rating-img" />
                    <img src={rating} alt="Instructor Rating" className="rating-img" />
                    <img src={rating} alt="Instructor Rating" className="rating-img" />
                  </div>
                  <p className="rating-text">Rated Instructors</p>
          </div> 
          </div>       
      </div>
      </div>

    </>
  )
}

export default HomeSection1
