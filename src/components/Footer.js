import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'

function Footer() {
  return (
    <>
    <div id='text2' class="bg-dark text-white py-5">
      <div class='p-5'>
        <div>
          <input type="text" name="" id="" />
          <button type="submit">Subscribe</button>
        </div>
        <p>Subscribe now to find out about new arrivals,seasonal sales and exclusive offers before anyone else</p>
      </div>
      <footer class="bg-dark text-white py-5">
  <div class="container">
    <div class="row">
    <div className="col-md-3">
          <h3 id='parag' style={{color:'#ffff', fontWeight:'500'}} class='fs-4'>SITE MAP</h3>
            <ul id='parag' className="list-unstyled fs-6 ">
              <li><Link class='text-white no-underline' to="/homecontent">Home</Link></li>
              <li><Link class='text-white no-underline' to="/about">About Us</Link></li>
              <li><Link class='text-white no-underline' to="/gallery">Gallery</Link></li>
              <li><Link class='text-white no-underline' to="/shop">Shop</Link></li>
              <li><Link class='text-white no-underline' to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
          <h3 id='parag'  style={{color:'#ffff', fontWeight:'500'}}>GG Abuja</h3>
            <ul id='parag' className="list-unstyled fs-6">
              <li><Link class='text-white no-underline'>FAQ</Link></li>
              <li><Link class='text-white no-underline'>Returns & Refunds</Link></li>
              <li><Link class='text-white no-underline'>Privacy Policy</Link></li>
              <li><Link class='text-white no-underline'>Terms of Use</Link></li>
            </ul>
          </div>
          <div className="col-md-3 ">
          <h3 id='parag'  style={{color:'#ffff', fontWeight:'500'}}>Contact Us</h3>
            <ul id='parag' className="list-unstyled fs-6">
              <li>+234-000-000-0000</li>
              <li>glamourgrove@gmail.com</li>
            </ul>
          </div>
          <div class="row mt-5">
    <div class="col-12 text-center text-muted">
      Copyright &copy; 2023  All rights reserved.
    </div>
  </div>
    </div>
  </div>
</footer>
    </div>
    </>
  )
}

export default Footer