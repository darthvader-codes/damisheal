import React from 'react'
import './About.css'
import about_img from '../../assets/dm-about.jpg'


const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Preparing For Tomorrow Today</h2>
        <p>
          Our goal is to celebrate and foster the diverse development of each learner, recognizing their unique qualities. By doing so, we empower them to engage thoughtfully and actively in the economic, cultural, and social tapestry of our nation. After all, a society thrives when its individuals are encouraged to shine in their own distinctive ways!
        </p>
        <p>
          To support this vision, we are committed to providing state-of-the-art facilities and a world-class faculty that inspire and challenge our learners. Our cutting-edge resources and expert educators create an environment where curiosity flourishes and knowledge is not just imparted but actively explored. By combining innovative tools with exceptional mentorship, we equip our students to excel in their pursuits and become leaders who will shape the future with confidence and creativity.
        </p>
      </div>
    </div>
  )
}

export default About