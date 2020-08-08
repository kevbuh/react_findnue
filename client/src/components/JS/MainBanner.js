import React from 'react'
import '../CSS/global.css'
import '../CSS/MainBanner.css'
import '../CSS/atMedia.css'

function MainBanner() {
  return (
    <section id="welcome-home">
    <div className="welcome-picture">
      <h1>Find New Brands</h1>
      <div className="middle">
        <span className="home-search">
          <i className="fas fa-search home-search"></i>
          <a href="./search">
            <input type="text" className="nameZoneHome" placeholder="Search..." />
          </a>
        </span>
      </div>
    </div>
  </section>
  )
}

export default MainBanner
