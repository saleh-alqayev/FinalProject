import React from 'react'

function Navbar() {
  return (
    <nav>
      <div className="navbar">
    <div className="navigation nav-container">
      <input type="checkbox" className='checkbox' />
      <div className="hamburger-lines">
        <span className='line line1'></span>
        <span className='line line2'></span>
        <span className='line line3'></span>
      </div>
      <div className="logo">
        <h2>My Portfolio</h2>
      </div>
      <div className="menu-items">
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About me</a></li>
        <li><a href='#'>My projects</a></li>
        <li><a href='#'>Experiences</a></li>
      </div>
    </div>
    </div>
    </nav>
  )
}

export default Navbar