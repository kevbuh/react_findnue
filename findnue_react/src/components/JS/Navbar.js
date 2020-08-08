import React from 'react'
import '../CSS/Navbar.css'
import { Link } from 'react-router-dom'
import '../CSS/global.css'
import './scripts'
import '../CSS/atMedia.css'

function Navbar() {
  return (
  <nav className="navbar">
    <div className="navbar-inner-width">
      <div className="min-menu">
        <span className="nav-logo home">
        <Link className="home" to="/">
          <h1>FindNue</h1>
        </Link>
        </span>
        <button className="menu-toggler home">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="navbar-menu home">
        <ul className="stockx-nav home">
          <Link to="/" className="logo"></Link>
          <Link to="/search">
          <i className="icon fas fa-search index-search-nav home"></i>
          </Link>
          <input type="text" className="nameZoneNav" placeholder="Search..." />
          <li>
            <Link to="/mens">Mens</Link>
          </li>
          <li>
            <Link to="/womens">Womens</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
