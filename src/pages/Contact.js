import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Contact() {
  return (
    <>
    <Navbar/>
    <div class="container">
  <div class="row justify-content-end">
    <div id='text4' class="col-md-6"> 
      <div class="mb-3">
        <label for="name" class="form-label"></label>
        <input type="text" class="form-control" id="name" placeholder="Your Name"/>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label"></label>
        <input type="email" class="form-control" id="email" placeholder="Your Email Address"/>
      </div>

      <div class="mb-3">
        <label for="subject" class="form-label"></label>
        <input type="text" class="form-control" id="subject" placeholder="Subject"/>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label"></label>
        <textarea class="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
      </div>

      <button id='text4' class="btn  btn-lg mb-3 rounded-0 text-white bg-dark" type="submit">Submit</button>

    </div>
  </div>
</div>


    <Footer/>
    </>
  )
 
}

export default Contact