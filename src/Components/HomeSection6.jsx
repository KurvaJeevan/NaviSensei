import React, { useEffect, useRef } from "react";
import Card from "./Card";
import {gsap} from "gsap"
// import images
import img1 from "../assets/section6img1.png";
import img2 from "../assets/section6img2.png";
import img3 from "../assets/section6img3.png";
import img4 from "../assets/section6img4.png";
import img5 from "../assets/section6img5.png";
import img6 from "../assets/section6img6.png";

const HomeSection6 = () => {
  const cardsData = [
    {
      image: img1,
      title: "Comprehensive Driving Lessons",
      description:
        "Tailored lessons that cover basic to advanced driving skills, ensuring learners gain the confidence and competence needed for safe driving",
    },
    {
      image: img2,
      title: "Safety and Emergency Training",
      description:
        "In-depth modules on vehicle safety features, traffic rules, and emergency handling, preparing learners to navigate the roads responsibly",
    },
    {
      image: img3,
      title: "Interactive Learning Materials",
      description:
        "Engaging videos, quizzes, and simulations that make the learning process enjoyable and effective, helping learners retain critical information",
    },
    {
      image: img4,
      title: "Enhanced Teaching Tools",
      description:
        "Access to a range of resources, including detailed lesson plans, interactive teaching aids, and up-to-date information on driving regulations to improve teaching quality",
    },
    {
      image: img5,
      title: "Learner Management",
      description:
        "Tools to track learner progress, provide personalized feedback, and manage scheduling efficiently, allowing instructors to focus more on teaching",
    },
    {
      image: img6,
      title: "Community and Networking",
      description:
        "Opportunities to connect with other instructors, share best practices, and participate in professional development activities to stay current in the field",
    },
  ];

  const ref = useRef(null);

  useEffect(() => {
    gsap.to(ref.current, { rotation: 360, x: 100, duration: 1.5, repeat:-1, yoyo:true });
  }, []);


  return (
    <section className="section6">
      <div className="offer-section ">
        <div className="offer-title flex items-center justify-center gap-3.5">
          What does <span className="brand-name">NaviSensei </span> Offer?
        </div>
        <div className="subtitle-wrapper flex justify-center">
          <span className="subtitle-highlight">
            Definitely better than you think
          </span>
          <div className="emoji" ref={ref}>😏</div>
        </div>

        {/* Card grid */}
        <div className="card-grid">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection6;
