
import downarrow from "../assets/downarrow.svg"

const HomeSection3 = () => {
  return (
    <div className='section3 '>
        
        <h2 className="section-title">Why use <span className="highlight-text">NaviSensei</span>?</h2>
        <div className='feature-items '>
            <div className='section3part1'>
                <div className='flex  gap-3'>
                    <div className="feature-value">1.5X</div>
                    <img src={downarrow} alt="Down arrow icon" className="feature-icon-img" width="45" height="74"/>
                </div>
                <p className="feature-label">Reasonable pricing structure</p>
            </div>
            <div className='flex section3part2 '>                    
                <div className="feature-bar-big feature-bar-value">90% Efficiency</div>
                <div className="feature-bar-small feature-bar-value">20% Efficiency</div>
            </div>
            <div className='section3part3'>
                <div className="feature-value">30+ Days</div>
                <div className="feature-label">Extensive guiding sessions</div>
            </div>

        </div>
        <div className='section3footer'>
            <p className="feature-description"><span className="highlight-text">NaviSensei</span> offers diverse driving resources and prioritizes individual learner care beyond just vehicle operation</p>
        </div>
    </div>
  )
}

export default HomeSection3
