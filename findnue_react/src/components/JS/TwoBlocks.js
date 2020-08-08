import React from 'react'
import '../CSS/global.css'
import '../CSS/TwoBlocks.css'
import '../CSS/atMedia.css'

function TwoBlocks() {
  return (
    <section id="services" class="dark">
    <div class="inner-width">
      <div class="link-a">
        <a href="./styles">
          Styles
        </a>
      </div>


      <div class="services">
        <div class="service-home three blocks">

          <a href="/streetwear">Street Wear</a>
        </div>

        <div class="service-home four blocks">

          <a href="/swim">Beach Gear</a>
        </div>

        <div class="block-two five blocks">
          <a href="/outdoors">Outdoors</a>
        </div>

      </div>
    </div>
  </section>
  )
}

export default TwoBlocks
