import React from 'react';
import Numbers from '../Numbers/Numbers';
import binance from '../../images/binance.svg';

import rectangle from '../../images/rectangle.png';

function Header() {
  return (
    <header className="header">
      <img className="header__rectangle" src={rectangle} alt="rectangle" />
      <p className="header__year header__year_position_left">2021*</p>
      <div className="header__container">
        <button className="header__button header__button_type_active" type='button'>EN</button>
        <span className="header__slash">/</span>
        <button className="header__button" type='button'>RU</button>
      </div>
      <p className="header__year header__year_position_right">2022</p>
      <h1 className="header__header">Bubble Drop</h1>
      <p className="header__text header__text_position_left">NEW COLLECTION</p>
      <p className="header__text header__text_position_right">PUSHKEEN & BACK TO THE ROOTS</p>
      <div className="header__numbers-container">
        <Numbers
          header={true}
        />
      </div>
      <p className="header__text2">Рассмотрим основные развивающиеся тренды 2022 года в моушн дизайне.</p>
      <img className="header__logo" src={binance} alt="logo" />
      <div className="header__container2">
        <p className="header__text3">420 TOKENS</p>
      </div>
    </header>
  );
}

export default Header;
