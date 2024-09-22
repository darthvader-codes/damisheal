import React from 'react'
import './Programs.css'
import program_1 from '../../assets/dm-program1.jpg'
import program_2 from '../../assets/dm-program2.jpg'
import program_3 from '../../assets/dm-programs3.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={program_1} alt=''/>
        <div className="caption">
          <img src={program_icon_3} alt=""/>
          <p>Pre-School</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_2} alt=''/>
        <div className="caption">
          <img src={program_icon_3} alt=""/>
          <p>Primary</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_3} alt=''/>
        <div className="caption">
          <img src={program_icon_3} alt=""/>
          <p>Secondary</p>
        </div> 
      </div>
    </div>
  )
}

export default Programs