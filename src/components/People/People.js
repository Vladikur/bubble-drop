import React, { useState, useEffect } from 'react';
import { data } from '../../constants/Data';
import Numbers from '../Numbers/Numbers';

function People() {

  const peopleInitialState = {
    bubl: '',
    name: '',
    avatar: '',
    image1: '../images/elena1.png',
    image2: '',
    info: '',
  }

  const [people1, setPeople1] = useState(peopleInitialState)
  const [people2, setPeople2] = useState(peopleInitialState)
  const [people3, setPeople3] = useState(peopleInitialState)
  const [arrayIndex1, setArrayIndex1] = useState(3)
  const [arrayIndex2, setArrayIndex2] = useState(0)
  const [arrayIndex3, setArrayIndex3] = useState(1)
  const [veryRare, setVeryRare] = useState(false)

  useEffect(() => {
    setPeople1(data[arrayIndex1])
    setPeople2(data[arrayIndex2])
    setPeople3(data[arrayIndex3])
  }, [arrayIndex1, arrayIndex2, arrayIndex3])

  function rareChange() {
    setVeryRare(false)
  }

  function veryRareChange() {
    setVeryRare(true)
  }

  function leftHandle() {
    const length = data.length
    if(arrayIndex1 !== 0) {
      setArrayIndex1(arrayIndex1 - 1)
    } else {
      setArrayIndex1(length - 1)
    }
    if(arrayIndex2 !== 0) {
      setArrayIndex2(arrayIndex2 - 1)
    } else {
      setArrayIndex2(length - 1)
    }
    if(arrayIndex3 !== 0) {
      setArrayIndex3(arrayIndex3 - 1)
    } else {
      setArrayIndex3(length - 1)
    }
  }

  function rightHandle() {
    const length = data.length
    if(arrayIndex1 !== length-1) {
      setArrayIndex1(arrayIndex1 + 1)
    } else {
      setArrayIndex1(0)
    }
    if(arrayIndex2 !== length-1) {
      setArrayIndex2(arrayIndex2 + 1)
    } else {
      setArrayIndex2(0)
    }
    if(arrayIndex3 !== length-1) {
      setArrayIndex3(arrayIndex3 + 1)
    } else {
      setArrayIndex3(0)
    }
  }

  return (
    <div className="people">
      <div className="people__button-container">
        <button onClick={rareChange} className={`people__button1 ${ !veryRare ? 'people__button1_type_active' : ''}`} type='button'>Редкие</button>
        <button onClick={veryRareChange} className={`people__button1 ${ veryRare ? 'people__button1_type_active' : ''}`} type='button'>Очень редкие</button>
      </div>
      { !veryRare ?
      <div className="people__image-container">
        <img className="people__image1" src={people1.image1} alt="Изображение"/>
        <img className="people__image2" src={people2.image1} alt="Изображение"/>
        <img className="people__image3" src={people3.image1} alt="Изображение"/>
      </div>
      :
      <div className="people__image-container">
        <img className="people__image1" src={people1.image2} alt="Изображение"/>
        <img className="people__image2" src={people2.image2} alt="Изображение"/>
        <img className="people__image3" src={people3.image2} alt="Изображение"/>
      </div>
      }
      <div className="people__numbers-container">
        <Numbers
          people={true}
        />
      </div>
      <div className="people__name-container">
        <p className="people__name people__name_type_left">{people1.name}</p>
        <p className="people__active-name">{people2.name}</p>
        <p className="people__name people__name_type_right">{people3.name}</p>
      </div>
      <div className="people__bubl-container">
        <button onClick={leftHandle} className="people__button2 people__button2_type_left" type='button'></button>
        <p className="people__bubl-text">{people2.bubl}</p>
        <button onClick={rightHandle} className="people__button2 people__button2_type_right" type='button'></button>
      </div>
      <div className="people__info-container">
        <div className="people__text-container">
          <span className="people__quotes people__quotes_type_top">бб</span>
          <p className="people__text">{people2.info}</p>
          <span className="people__quotes people__quotes_type_bottom">бб</span>
        </div>
        <div className="people__avatar-container">
          <span className="people__avatar-tag">{people2.tag}</span>
          <span className="people__avatar-tokens">60 tokens</span>
          <img className="people__avatar" src={people2.avatar} alt="Изображение"/>
        </div>
      </div>
    </div>
  );
}

export default People;
