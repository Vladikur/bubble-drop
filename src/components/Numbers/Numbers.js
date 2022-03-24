import React from 'react';

function Numbers({ header, about, people }) {

  return (
    <div className="numbers">
      <span className={`numbers__number ${ header ? 'numbers__number_active' : ''}`}>01</span>
      { header ? <div className="numbers__line"></div> : ''}
      <span className={`numbers__number ${ about ? 'numbers__number_active' : ''}`}>02</span>
      { about ? <div className="numbers__line"></div> : ''}
      <span className={`numbers__number ${ people ? 'numbers__number_active' : ''}`}>03</span>
      { people ? <div className="numbers__line"></div> : ''}
      <span className="numbers__number">04</span>
      <span className="numbers__number">05</span>
    </div>
  );
}

export default Numbers;
