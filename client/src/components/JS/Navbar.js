import React from 'react'
import '../CSS/Navbar.css'
import '../CSS/global.css'
import './scripts'
import '../CSS/atMedia.css'

function Navbar() {
  return (
    <nav className="navbar sticky">
    <div className="navbar-inner-width ">
      <div className="min-menu">
        <span className="nav-logo">
          <div className="navbar-logo-home">

          </div>
          <a href="./">
            <h1>FindNue</h1>
          </a>
        </span>
        <button className="menu-toggler ">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="navbar-menu">
        <ul className="stockx-nav">
          <a href="./" className="logo">
            <span className="nav-logo mobile">
              <img src="images/logoblack.png" alt="." />
            </span>
          </a>
          <i className="icon fas fa-search index-search-nav"></i>
          <input type="text" className="nameZoneNav" placeholder="Search..." />
          <li>
            <a href="./mens">Mens</a>
          </li>
          <li>
            <a href="./womens">Womens</a>
          </li>
          <li>
            <a href="./about">About</a>
          </li>
          <li>
            <a href="./news">News</a>
          </li>
          <li>
            <a href="./account">Account</a>
          </li>
          {/* <!--
                        <li>
                        <a href="sell.html">Sell</a>
                    </li>
                        <li>
                            <a href="help.html">Help</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                        <li>
                            <a href="account.html">Account</a>
                        </li>
                        <li>
                            <a href="login.html">Login</a>
                        </li>--> */}

        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
