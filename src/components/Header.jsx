import React from 'react'
import Typed from 'react-typed'


function Header() {
  return (
    <div>
        <div className="header-wrapper">
            <div className="main-info">
                <h2>Portfolio about Saleh Alqayev</h2>
                <Typed 
                className='typed-text'
                strings={[
                    'Microsoft Technologies Associate',
                    'Front-end Developer',
                    'System Engineering'
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop>

                </Typed>
            </div>
        </div>
    </div>
  )
}

export default Header