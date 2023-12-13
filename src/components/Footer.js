import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'

function Footer() {
  return (
    <>
    <div id='text2' class="bg-dark text-white ">
      <div class='subscribe-container p-5'>
        <div>
          <input type="text" name="" id="" placeholder="Enter your email"  />
          <button type="submit">Subscribe</button>
        </div>
        <p>Subscribe now to find out about new arrivals,seasonal sales and exclusive offers before anyone else</p>
      </div>
      <footer class="bg-dark text-white py-5">
  <div class="container">
    <div class="row ">
    <div className="col-md-3">
          <h3 style={{color:'#ffff', fontWeight:'500'}} class='fs-4'>SITE MAP</h3>
            <ul className="list-unstyled fs-6 ">
              <li><Link class='text-white no-underline' to="/homecontent">Home</Link></li>
              <li><Link class='text-white no-underline' to="/about">About Us</Link></li>
              <li><Link class='text-white no-underline' to="/gallery">Gallery</Link></li>
              <li><Link class='text-white no-underline' to="/shop">Shop</Link></li>
              <li><Link class='text-white no-underline' to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
          <h3  style={{color:'#ffff', fontWeight:'500'}}>GG Abuja</h3>
            <ul className="list-unstyled fs-6">
              <li><Link class='text-white no-underline'>FAQ</Link></li>
              <li><Link class='text-white no-underline'>Returns & Refunds</Link></li>
              <li><Link class='text-white no-underline'>Privacy Policy</Link></li>
              <li><Link class='text-white no-underline'>Terms of Use</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
      <h3 style={{ color: '#ffff', fontWeight: '500' }}>ATELIER</h3>
      <ul className="list-unstyled fs-6">
        <li className='mb-3'>
          <span>Address:</span>
          <p className='text-muted'>16 Adetola Crescent, Wuse, Zone 2, Abuja, Nigeria</p>
        </li>
        <li>
            <span>Phone:</span> <p className='text-muted'>+(234) 000 0000 000</p> 
            <span>E-mail:</span> <p className='text-muted'>glamourgrove@gmail.com</p> 
        </li>
        <li className='mb-3'>
          <span>Opening Hours:</span>
          <p className='text-muted'>Monday to Saturday 10:00 - 19:00 WAT</p>
        </li>
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