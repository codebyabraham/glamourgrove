import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../App.css'

function Contact() {
  return (
    <>
    <Navbar/>
    <div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class=" mb-3">
        <div id='text4' class="">
          <h2 class="card-title">Contact</h2>
          <ul class="list-group list-group-flush">
            <p>Phone: <span class='text-muted'>+(234) 000 0000 000 </span> </p>
            <p>Email: <span class='text-muted'>glamourgrove@gmail.com</span></p>
            <p>Address: <span class='text-muted'>16 Adetola Crescent, Wuse, Zone 2, Abuja, Nigeria</span></p>
            <p>Opening Hours: <span >10:00 - 19:00 WAT</span> </p>
          </ul>
        </div>
      </div>
    </div>

   
    <div class="col-md-6">
      <div id='text4' class="mb-3"> 
        <h3>Get in touch</h3>
        <div class="mb-3">
          <label for="name" class="form-label"></label>
          <input type="text" class="form-control" id="name" placeholder="Your Name"/>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label"></label>
          <input type="email" class="form-control" id="email" placeholder="Your Email Address"/>
        </div>

        <div class="mb-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>Subject</option>
            <option value="1">Delivery</option>
            <option value="2">Support</option>
            <option value="3">Order</option>
            <option value="4">Payment</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label"></label>
          <textarea class="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
        </div>

        <button id='text4' class="btn btn-lg mb-3 rounded-0 text-white bg-dark" type="submit">Submit</button>
      </div>
    </div>
  </div>
</div>


    <Footer/>
    </>
  )
 
}

export default Contact