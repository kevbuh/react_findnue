import React from 'react'
import './global.css'
import './Footer.css'

function Footer() {
  return (
    <footer>
    <div className="login">
      <div className="footer-links">
        <ul>
          <h3>Quick Links</h3>
          <li>
            <a href="./">Home</a>
          </li>
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
        </ul>
      </div>
      <div className="footer-links">
        <ul>
          <h3>Your Account</h3>
          <li>
            <a href="./account">Account</a>
          </li>
          <li>
            <a href="./account/security">Security</a>
          </li>
          <li>
            <a href="./account/shop">Shop</a>
          </li>
          <li>
            <a href="./account/info">Info</a>
          </li>
          <li>
            <a href="./account/following">Following</a>
          </li>
          <li>
            <a href="./account/orders">Orders</a>
          </li>
          <li>
            <a href="./account/settings">Settings</a>
          </li>
        </ul>
      </div>
      <div className="footer-links">
        <ul>
          <h3>View</h3>
          <li>
            <a href="./search">Vintage</a>
          </li>
          <li>
            <a href="./account">Street Wear</a>
          </li>
          <li>
            <a href="./account">Hoodies</a>
          </li>
          <li>
            <a href="./account">Shorts</a>
          </li>
          <li>
            <a href="./account">Summer Wear</a>
          </li>
          <li>
            <a href="./account">View All</a>
          </li>
        </ul>
      </div>
      <div className="sm footer-links">
        <a href="https://www.facebook.com/" class="footer-fab fab fa-facebook-f"></a>
        <a href="https://www.twitter.com/" class="footer-fab fab fa-twitter"></a>
        <a href="https://www.instgram.com/" class="footer-fab fab fa-instagram"></a>
        <a href="https://www.linkedin.com/" class="footer-fab fab fa-linkedin-in"></a>
        <a href="https://www.youtube.com/" class="footer-fab fab fa-youtube"></a>
      </div>

      <div className="copyright footer-links">
        &copy; 2020 | FindNue
      </div>
    </div>
  </footer>
  )
}

export default Footer
