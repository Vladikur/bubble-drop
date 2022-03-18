import React from 'react';
import bubble1 from '../../images/bubble1.png';
import bubble2 from '../../images/bubble2.png';
import bubble3 from '../../images/bubble3.png';
import bubble4 from '../../images/bubble4.png';
import bubble5 from '../../images/bubble5.png';

function MaskGroup() {
  return (
    <div className="mask-group">
      <img className="mask-group__bubble0" src={bubble4} alt="Пузырь" />
      <img className="mask-group__bubble1" src={bubble1} alt="Пузырь" />
      <img className="mask-group__bubble2" src={bubble2} alt="Пузырь" />
      <img className="mask-group__bubble3" src={bubble3} alt="Пузырь" />
      <img className="mask-group__bubble4" src={bubble4} alt="Пузырь" />
      <img className="mask-group__bubble5" src={bubble5} alt="Пузырь" />
      <img className="mask-group__bubble6" src={bubble5} alt="Пузырь" />
      <img className="mask-group__bubble7" src={bubble5} alt="Пузырь" />
      <img className="mask-group__bubble8" src={bubble5} alt="Пузырь" />
      <img className="mask-group__bubble9" src={bubble5} alt="Пузырь" />
      <img className="mask-group__bubble10" src={bubble5} alt="Пузырь" />
    </div>
  );
}

export default MaskGroup;
