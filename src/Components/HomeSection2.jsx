
import section2image from '../assets/section2image.png'
const HomeSection2 = () => {
  return (
    <section className='section2'>
      <h2 className="section-title">Trusted by Top <span className="highlight-text">Instructors</span>!</h2>
      <div className='instruction-boxes'>
        <div className='instructor-box'>
          <img src={section2image} alt="" srcset="" />
        </div>
        <div className='instructor-box'></div>
        <div className='instructor-box'></div>
        <div className='instructor-box'></div>
      </div>
    </section>
  )
}

export default HomeSection2
