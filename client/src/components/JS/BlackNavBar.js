import React from 'react'
import '../CSS/BlackNavBar.css'

function BlackNavBar() {
  return (
    <nav class="navbar sticky">
    <div class="navbar-inner-width ">
      <div class="min-menu">
        <span class="nav-logo">
          <div class="navbar-logo-home">

          </div>
          <a href="./">
            <h1>FindNue</h1>
          </a>

        </span>
        <button class="menu-toggler ">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu">
        <ul class="stockx-nav">
          <a href="./" class="logo">
            <span class="nav-logo mobile">
              <img src="images/logoblack.png" alt="." />
            </span>
          </a>
          <i class="icon fas fa-search index-search-nav"></i>
          <input type="text" class="nameZoneNav" placeholder="Search..." />
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
          {/* 
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
                        </li> */}

        </ul>
      </div>
    </div>
  </nav>
  )
}

export default BlackNavBar
