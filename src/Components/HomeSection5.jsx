
import section5image from "../assets/section5image.png"

const HomeSection5 = () => {
  return (
    <div className='section5'>
            <h2 className="section-title"><span className="highlight-text">NaviSensei</span> is for Instructors</h2>
            <div className="cta-container" >
                 <img src={section5image} className="cta-image2" width="45%" height="392"/>
                <div className="cta-text2 flex ">
                <p><strong>NaviSensei</strong> is designed for driving instructors who are passionate about teaching and connecting with aspiring learners.</p>
                    <p>Our platform provides instructors with the tools and resources they need to enhance their teaching methods, reach a broader audience, and improve their business sustainability.</p>
                    <p>Whether you're an experienced instructor looking to share your knowledge or a new teacher aiming to build a reputation, <strong>NaviSensei</strong> supports you in making a positive impact on the driving community.</p>
                    <p>Joinus to empower and educate the next generation of responsible drivers</p>
                </div>
            </div>
           <div className="cta-button2-container">
                    <p>Join now as a Instructor and a responsible driver -</p>
                    <button className="cta-button2">Get Started</button>
                </div>
    
        </div>
  )
}

export default HomeSection5
