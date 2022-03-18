import React, { useState } from 'react';
import paralax from '../../images/paralax.png';

function Paralax() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  const ImageStyle = {
    position: "absolute",
    top: `${-15 + position.y}px`,
    left: `${-76 + position.x}px`,
    width: "1449px",
    height: "413px",
    objectFit: "cover",
    objectPosition: "center",
  }

  function parallaxHandler(e) {
    const x = (e.clientX - window.innerWidth / 2) / 30;
    const y = (e.clientY - window.innerHeight / 2) / 30;
    setPosition({x: x, y: y})
  }

  return (
    <div className="paralax" onMouseMove={parallaxHandler}>
      <img style = {ImageStyle} src={paralax} alt="Паралакс"/>
    </div>
  );
}

export default Paralax;
