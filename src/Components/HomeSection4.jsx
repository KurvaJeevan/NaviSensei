
import section4image from "../assets/section4image.png"

const HomeSection4 = () => {
  return (
    <div className='section4'>
        <h2 className="section-title">Who is <span className="highlight-text">NaviSensei</span> for?</h2>
        <div className="cta-container">
            <div className="cta-text flex">
            <p><strong>NaviSensei</strong> is for aspiring learners who seek comprehensive driving education. It caters to individuals eager to learn driving, understand safety features, and master traffic rules.</p>
            <p>Driving instructors can connect with learners and enhance their teaching methods. Parents and guardians can ensure their teens receive top-notch driving education, and eco-conscious drivers can learn sustainable driving practices.</p>
            <p><strong>NaviSensei</strong> aims to create responsible and confident drivers for a safer road environment.</p>
            </div>
             <img src={section4image} className="cta-image" width="600" height="392"/>
        </div>
       <div className="cta-button2-container">
                <p>Join now as a Learner and a responsible driver -</p>
                <button className="cta-button2">Get Started</button>
            </div>

    </div>
  )
}

export default HomeSection4
