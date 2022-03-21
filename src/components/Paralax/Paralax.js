import React, { useState, useEffect } from 'react';
import paralax from '../../images/paralax.png';

function Paralax() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [leftPosition, setLeftPosition] = useState(-76)
  const [size, setSize] = React.useState(window.innerWidth)
  const ImageStyle = {
    position: "absolute",
    top: `${-15 + position.y}px`,
    left: `${leftPosition + position.x}px`,
  }

  const updateWidth = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth);

    if (size < 1295) {
      setLeftPosition(-76-150000*(1/size))
    } else {
      setLeftPosition(-76)
    }

    return () => window.removeEventListener("resize", updateWidth);
  }, [size])

  function parallaxHandler(e) {
    const x = (e.clientX - window.innerWidth / 2) / 35;
    const y = (e.clientY - window.innerHeight / 2) / 35;
    setPosition({x: x, y: y})
  }

  return (
    <div className="paralax" onMouseMove={parallaxHandler}>
      <img className="paralax__image" style={ImageStyle} src={paralax} alt="Паралакс"/>
    </div>
  );
}

export default Paralax;
