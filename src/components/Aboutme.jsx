import React from 'react'
import Image from '../Components/img/me.jpeg'

function Aboutme() {
  return (
    <div className='container py-5'>
      <div className="row">
        <div className='col-lg-6 col-xm-12'>
        <div className="profile-img">
            <img src={Image} alt="" className='img1'/>
        </div>
        </div>
        <div className="col-lg-6 col-xm-12">
            <h2 className='about-header'>About Me</h2>
            <p className="about-main">
            Hello, I am Saleh and I am 19 years old. At the moment I study at Azerbaijan Oil and Industry University and I am third course. I want to be Full-stack Developer.I am Front-end Developer now that's why I thank Anvar Khalid who is my best teacher and I wish my classmates good luck!
            </p>
        </div>
  </div>
    </div>
  )
}

export default Aboutme