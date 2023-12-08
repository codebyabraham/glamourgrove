import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";
import cart from '../images/cart.png'

function Navbar() {
  
  return (
    <>
    <div class="container">
  <div class="row">
    <div class="col-md-6 text-center">
      <img src="https://example.com/logo.png" alt="Logo" class="img-fluid"/>
      
    </div>
    <h2 class="mt-3 text-right">Subscribe to our Newsletter</h2>
    <div class="col-lg-6 text-left">
      <p>For enquiries call <br/> (234) 809 8888 633</p>
    </div>
  </div>
</div>



<div id="menu-container">
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <Link class="nav-link text-dark" href="#">HOME</Link>
    </li>
    <li class="nav-item">
      <a class="nav-link text-dark" href="#">ABOUT US</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-dark" href="#">GALLERY</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-dark" href="#">SHOP</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-dark" href="#">CONTACT US</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <img src={cart} alt="Cart" class="cart-icon" />
      </a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-dark" href="#" id="currencyDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        NGN
      </a>
      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="currencyDropdown">
        <li><a class="dropdown-item" href="#">USD</a></li>
        <li><a class="dropdown-item" href="#">EUR</a></li>
        <li><a class="dropdown-item" href="#">GBP</a></li>
      </ul>
    </li>
  </ul>
</div>

    </>
  )
}

export default Navbar