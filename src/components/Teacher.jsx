import React from 'react'
import Anvar from '../Components/img/anvar.jpeg'

function Teacher() {
  return (
    <div className="teacher-container">
        <div className="teacher-row">
                <img src={Anvar} className='teacher-img' />
                <div className="about-teacher">
                <h2 className='teacher-header'> About Anvar Khalid</h2>
                <p className="teacher-text">My teacher is Anvar Muzanfarli who teachs some programs. He is 25 years old. <br /> He won the name of Microsoft Certified Trainer. I thank Anvar Khalid for everything</p>
                </div>
            </div>
        </div>
  )
}

export default Teacher