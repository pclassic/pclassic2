import React, {useState} from 'react'
import Bar from "../Bar"
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../images/p1.jpg"
import image2 from "../images/p2.jpg"
import image3 from "../images/p3.jpg"
import image4 from "../images/p4.jpg"
import image5 from "../images/p5.jpg"
import image6 from "../images/p6.jpg"
import image7 from "../images/p7.jpg"
import image8 from "../images/p8.jpg"
import image9 from "../images/p9.jpg"
import image10 from "../images/p10.jpg"
import image11 from "../images/p11.jpg"
import image12 from "../images/p12.jpg"
import image13 from "../images/p13.jpg"
import image14 from "../images/p14.jpg"
import image15 from "../images/p15.jpg"

function Photos() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
        

        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image4}
          alt="4 slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image5}
          alt="5 slide"
        />

        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Photos