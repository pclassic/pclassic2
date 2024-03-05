import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';

const arr = Array.from({length: 7}, (_, i) => i + 1);

function Photos() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} style={{margin: "50px"}}>
      {arr.map((val, index) => (
        <Carousel.Item key={index} height={"200px"}>
          <img
            width={"200px"}
            className="d-block w-100"
            src={`/contest/p${val}.jpg`}
            alt={`Slide ${val}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  )
}

export default Photos