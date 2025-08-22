import React from 'react'
import navisenseilogo from "../assets/navisenseilogo.png"
import mail from "../assets/mail.svg"
const Footer = () => {
  return (
    <div className='web-footer flex gap-30 font-bold'>
      <div className='flex flex-col gap-4 items-center' >
        <img src={navisenseilogo} className="footer-logo" alt="Company Logo h-23 w-40"/>
        <div className="footer-copyright text-gray-800 font-bold">© 2022 PostPilot, Inc. All rights reserved.</div>
      </div>
      <div className='flex flex-col gap-10 text-xl '>
        <div className='text-2xl text-gray-600'>Company</div>
        <div>About us</div>
        <div>Partner program</div>
        <div>Career</div>
        <div>Contact Us</div>
        <div>Privacy Policy</div>
      </div>
      <div className='flex flex-col gap-10 mt-18 text-xl'>
         <div >Pricing</div>
         <div >Reviews</div>
         <div >Newsletter</div>
         <div >Our motive</div>
         <div >Terms & conditions</div>
      </div>
      <div className='flex flex-col gap-10 text-xl'>
        <div className='text-2xl text-gray-600'>Contact</div>
        <div className='flex  items-center gap-2'>
        <img src={mail} className='h-10' alt="Email Icon" />
        <div>support@navisensei.com</div>
      </div>
        <div className='text-xl'>With <span className='text-red-500'>❤</span> from our facility in Hyderabad.</div>
      </div>
    </div>
  )
}

export default Footer
