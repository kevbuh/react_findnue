import React from 'react'
import '../CSS/global.css'
import '../CSS/atMedia.css'
import '../CSS/Account.css'

function Account() {
  return (
    <div>
    <section id="services" className="dark">
    <div className="inner-width">
      <h1 className="section-title"> *V1.0.2</h1>
      <div className="services">
        <div className="service">
          <a href="./account/security"><i className="fas fa-lock acc-img"></i>Security</a>
        </div>
        <div className="service">
          <a href="./account/shop"><i className="fas fa-store acc-img"></i>Shop</a>
        </div>
        <div class="service">
          <a href="./account/info"><i className="fas fa-userName-circle acc-img"></i>Info</a>
        </div>
        <div className="service">
          <a href="./account/following"><i className="fas fa-users acc-img"></i>Following</a>
        </div>
        <div className="service">
          <a href="./account/orders"><i className="fas fa-shopping-cart acc-img"></i>Orders</a>
        </div>
        <div className="service">
          <a href="./account/settings"><i className="fas fa-cog acc-img"></i>Settings</a>
        </div>
      </div>
    </div>
  </section>

 
  <section id="account">
    <div class="account-top">
      <h1>Account</h1>
      {/* <h2>{{ name }}</h2> */}
      <a href="./account/shop">Create Brand Account</a>
      <a href="/logout">OR Logout</a>
    </div>

  </section>
  </div>
  )
}

export default Account
