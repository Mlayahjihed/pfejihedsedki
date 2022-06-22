import React from 'react';
import Img from "./images/contact.jpg"
import Carousel from 'react-bootstrap/Carousel';
const Acceill = () => {
    
    return (
        
  
        <div style={{ display: 'block', width: 1200, padding: 10,margin: 'auto'}}>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={Img}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3 >Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={Img}            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    );
    
}

export default Acceill;
