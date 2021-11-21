
import React from 'react';
import "./Banner.css";
import banner1 from "../../../images/bg-pic/image2.png"
import banner2 from "../../../images/bg-pic/image1.png"
import banner3 from "../../../images/bg-pic/female2.png"
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
 <>
    <Carousel className="mb-5">
        <Carousel.Item interval={1000}>
        <img
        className=" size-cut d-block w-100"
        src={banner1}
        alt="First slide"
        />
    <Carousel.Caption>
        <button className="btn-button">Learn more</button>
        
        <button className="btn-contact">Contact us</button>
       <br />
        <h1 className="text"> Best Health Care Medical Center</h1>
        <p className="text-warning">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className = "size-cut d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
        <button className="btn-button">Learn more</button>
        
        <button className="btn-contact">Contact us</button>
        <br />
        <h1 className="text"> Best Health Care Medical Center</h1>
        <p className="text-warning">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className = "size-cut d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
        <button className="btn-button">Learn more</button>
        
        <button className="btn-contact">Contact us</button>
             <h1 className="text"> Best Health Care Medical Center</h1>
        <p className="text-warning">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>
    );
};

export default Banner;
// try your banner update