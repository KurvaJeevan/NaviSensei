import React, { useEffect, useRef } from 'react'
import ReviewCard from './ReviewCard'
import img1 from "../assets/instagram.svg";
import img2 from "../assets/userprofilephoto2.png";
import img3 from "../assets/userprofilephoto1.png";
import img4 from "../assets/google.svg";
import gsap from "gsap"
import { useGSAP } from '@gsap/react';



const HomeSection8 = () => {
    const reviewData=[
        {
            profilephoto:img2,
            name:"Helen Guo",
            socialmediaid:"@HelenGuo_",
            socialmedialogo:img1,
            desc:"NaviSensei made driving lessons fun and easy. I feel confident and ready for the road!"
        },
        {
            profilephoto:img3,
            name:"Nathan Woods",
            socialmediaid:"@HeisNathan",
            socialmedialogo:img4,
            desc:"NaviSensei's instructors are fantastic. They provided clear guidance and helpful feedback."
        },
        {
            profilephoto:img2,
            name:"Helen Guo",
            socialmediaid:"@HelenGuo_",
            socialmedialogo:img1,
            desc:"NaviSensei made driving lessons fun and easy. I feel confident and ready for the road!"
        },
        {
            profilephoto:img3,
            name:"Nathan Woods",
            socialmediaid:"@HeisNathan",
            socialmedialogo:img4,
            desc:"NaviSensei's instructors are fantastic. They provided clear guidance and helpful feedback."
        }
        
    ]
    let fireRef=useRef(null)
    let heading=useRef(null)

    useGSAP(()=>{

      gsap.fromTo(heading.current,{
        opacity:0,
        // duration:1,
        y:30,
        // delay:1
      },{
        opacity: 1, y: 0, duration: 2, delay: 1, ease: "power2.out" 
      });
       gsap.to(fireRef.current, {
      scale: 1.2,
      opacity: 0.8,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "power1.inOut",
      
    });

},[])
  return (
    <div className='section8'>
        <h1 ref={heading}> <span className="brand-name-section8 ">NaviSensei</span> is <span ref={fireRef} className="inline-block">🔥</span>  for 
        <span className="highlighted-text ml-8">Learners</span></h1>
      
        <div className='flex mt-30'>
          {reviewData.map((card, index) => (
            <ReviewCard
              key={index}
              profilephoto={card.profilephoto}
              name={card.name}
              socialmediaid={card.socialmediaid}
              socialmedialogo={card.socialmedialogo}
              desc={card.desc}
            />
          ))}
        </div>
    </div>
  )
}

export default HomeSection8
