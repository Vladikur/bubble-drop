import React from 'react';
import MaskGroup from '../MaskGroup/MaskGroup';
import Paralax from '../Paralax/Paralax';
import Header from '../Header/Header';
import About from '../About/About';
import People from '../People/People';

function App() {
  return (
    <div className="app">
      <Header/>
      <MaskGroup/>
      <About/>
      <Paralax/>
      <People/>
    </div>
  );
}

export default App;
