import React from 'react';

function Numbers({ header }) {

  return (
    <div className="numbers">
      <span className={`numbers__number ${ header ? 'numbers__number_active' : ''}`}>01</span>
      {  header ? <div className="numbers__line"></div> : ''}
      <span className="numbers__number">02</span>
      <span className="numbers__number">03</span>
      <span className="numbers__number">04</span>
      <span className="numbers__number">05</span>
    </div>
  );
}

export default Numbers;