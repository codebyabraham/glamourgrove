import React from 'react'
import { Carousel } from "react-bootstrap";
import '../App.css'
import one from '../images/1.jpeg';
import two from '../images/2.jpeg';
import three from '../images/3.jpeg';


function HomeContent() {
  return (
    <>
    <div class='col-12 text-center'>
        <h1 id='text1' class='fs-1'>WELCOME <br /> TO <br /> GLAMOURGROVE</h1>
        <p>We take your ideas and make them reality</p>
        <div><span>READ THE</span> <br /> GLAMOURGROVE STORY</div>
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