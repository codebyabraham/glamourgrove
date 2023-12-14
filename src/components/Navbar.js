import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";
import cart from '../images/cart.png'
import GG from '../images/G.png'

function Navbar() {
  
  return (
    <>
  <div className="text-center">
    <img src={GG} alt="Logo" className="img-fluid" style={{ maxWidth: '150px', height: 'auto' }}/>
</div>
<div id="menu-container">
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <Link class="nav-link text-dark" to="/" href="#">HOME</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link text-dark" to="/about" href="#">ABOUT US</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link text-dark" to="/gallery" href="#">GALLERY</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link text-dark" to="/shop" href="#">SHOP</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link text-dark" to="/contact" href="#">CONTACT US</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" href="#">
        <img src={cart} alt="Cart" class="cart-icon" />
      </Link>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-dark" href="#" id="currencyDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        NGN
      </a>
      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="currencyDropdown">
        <li><a id='text2' class="dropdown-item" href="#">USD</a></li>
        <li><a id='text2' class="dropdown-item" href="#">EUR</a></li>
        <li><a id='text2' class="dropdown-item" href="#">GBP</a></li>
      </ul>
    </li>
  </ul>
</div>

    </>
  )
}

export default Navbar