import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/dm-face.jpg'
import user_2 from '../../assets/dm-face2.jpg'
import user_3 from '../../assets/dm-face.jpg'
import user_4 from '../../assets/dm-face2.jpg'

const Testimonial = () => {

  const slider = useRef();
  let tx = 0;

  const slideFoward = () => {
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward = () => {
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className='testimonial'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideFoward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Malama Lukwesa</h3>
                  <span>Grade 7</span>
                </div>
              </div>
              <p>Choosing Damisheal Christian Academy for my foundational education was the best dicision my parents made for me. I loved every single day there and the frienships I made have lasted till my professional career. Thank you for all you did for me!</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Lesly Kumwenda</h3>
                  <span>Grade 4</span>
                </div>
              </div>
              <p>Choosing Damisheal Christian Academy for my foundational education was the best dicision my parents made for me. I loved every single day there and the frienships I made have lasted till my professional career. Thank you for all you did for me!</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Tendai Tembo</h3>
                  <span>Grade 9</span>
                </div>
              </div>
              <p>Choosing Damisheal Christian Academy for my foundational education was the best dicision my parents made for me. I loved every single day there and the frienships I made have lasted till my professional career. Thank you for all you did for me!</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Steph McHontagry</h3>
                  <span>Grade 5</span>
                </div>
              </div>
              <p>Choosing Damisheal Christian Academy for my foundational education was the best dicision my parents made for me. I loved every single day there and the frienships I made have lasted till my professional career. Thank you for all you did for me!</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial