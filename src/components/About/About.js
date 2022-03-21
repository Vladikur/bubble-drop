import React from 'react';
import world from '../../images/world.png';
import dot from '../../images/dot.svg';
import Numbers from '../Numbers/Numbers';
import logoAbout from '../../images/logo-about.svg';

function About() {
  return (
    <div className="about">
      <img className="about__world" src={world} alt="world" />
      <img className="about__dot" src={dot} alt="dot" />
      <p className="about__comand">Команда Bubble</p>
      <div className="about__numbers-container">
        <Numbers
          about={true}
        />
      </div>
      <h2 className="about__header">О проекте</h2>
      <p className="about__text">Затронем тенденции, начиная с фильмов и коммерческой рекламы, до тематических исследований и всего, что между ними. Вы не увидели бы эту статью без бесчисленных вкладов.</p>
      <img className="about__logo" src={logoAbout} alt="logoAbout" />
      <a href=" " className="about__link" target="_blank" rel='noreferrer'>Читать больше в статье</a>
    </div>
  );
}

export default About;
