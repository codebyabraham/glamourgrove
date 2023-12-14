import React from 'react'
import { Carousel } from "react-bootstrap";
import '../App.css'
import { Link } from "react-router-dom";
import one from '../images/1.jpeg';
import two from '../images/2.jpeg';
import three from '../images/3.jpeg';
import four from '../images/4.jpeg';
import five from '../images/5.jpeg';
import six from '../images/6.jpeg';
import seven from '../images/7.jpeg';
import eight from '../images/8.jpeg';



function HomeContent() {
  /* global $ */

  $(document).ready(function () {
    $('.img-thumbnail').click(function () {
      const imgSrc = $(this).attr('src');
      $('#modalImage').attr('src', imgSrc);
    });
  });
  return (
    <>
    <div class='col-12 text-center'>
        <h1 id='text1' class='fs-1 fw-bolder'>WELCOME <br /> TO <br /> GLAMOURGROVE</h1>
        <p id='text1'>We take your ideas and make them reality</p>
        <Link class="nav-link text-dark" to="/about" href="#" >
          <span>READ THE</span> <br /> GLAMOURGROVE STORY
        </Link>
    </div>
    <div class="container">
  <div class="row">
    <div class="col-md-3">
      <a data-toggle="modal" data-target="#exampleModal" href="#">
        <img src={one} class="img-thumbnail" alt="..." style={{ maxWidth: '100%', height: 'auto' }} />
      </a>
    </div>
    <div class="col-md-3">
      <a data-toggle="modal" data-target="#exampleModal" href="#">
        <img src={two} class="img-thumbnail" alt="..." style={{ maxWidth: '100%', height: 'auto' }} />
      </a>
    </div>
    <div class="col-md-3">
      <a data-toggle="modal" data-target="#exampleModal" href="#">
        <img src={three} class="img-thumbnail" alt="..." style={{ maxWidth: '100%', height: 'auto' }} />
      </a>
    </div>
    <div class="col-md-3">
      <a data-toggle="modal" data-target="#exampleModal" href="#">
        <img src={four} class="img-thumbnail" alt="..." style={{ maxWidth: '100%', height: 'auto' }} />
      </a>
    </div>
    <div class="col-md-3">
      <a data-toggle="modal" data-target="#exampleModal" href="#">
        <img src={five} class="img-thumbnail" alt="..." style={{ maxWidth: '100%', height: 'auto' }} />
      </a>
    </div>
    <div class="col-md-3">
      <a data-toggle="modal" data-target="#exampleModal" href="#">
        <img src={six} class="img-thumbnail" alt="..." style={{ maxWidth: '100%', height: 'auto' }} />
      </a>
    </div>
    <div class="col-md-3">
      <a data-toggle="modal" data-target="#exampleModal" href="#">
        <img src={seven} class="img-thumbnail" alt="..." style={{ maxWidth: '100%', height: 'auto' }} />
      </a>
    </div>
    <div class="col-md-3">
      <a data-toggle="modal" data-target="#exampleModal" href="#">
        <img src={eight} class="img-thumbnail" alt="..." style={{ maxWidth: '100%', height: 'auto' }} />
      </a>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <img src="" id="modalImage" class="img-fluid" alt="Large Image" />
      </div>
    </div>
  </div>
</div>

    
    {/* <Carousel className="custom-carousel w-50 " >
        <Carousel.Item>
        <div id="text-content" class="carousel-caption align-items-center text-start d-md-block">
      </div>
          <img
            className="d-block w-100 custom-carousel-image"
            src={one}
            alt="First slide"
          />
        
        </Carousel.Item>
        <Carousel.Item>
        <div id="text-content" class="carousel-caption align-items-center text-start d-md-block">
        
      </div>
          <img
            className="d-block w-100 custom-carousel-image"
            src={two}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src={three}
            alt="Third slide"
          />
           <div id="text-content" class="carousel-caption align-items-center text-start d-md-block">
      </div>
        </Carousel.Item>
      </Carousel> */}
    </>
  )
}

export default HomeContent