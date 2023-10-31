import React from 'react';
import Button from '../Button/Button';
import Slidebackground from '../../../public/images/banner_car.jpg';

import styles from './Slide.module.css';

interface SlideProps {
  data: {
    title: string;
    subtitle: string;
    h1: boolean;
    buttonText: string;
  };
  onButtonClick: () => void;
}

function Slide({ data, onButtonClick }: SlideProps) {
  const { title, subtitle, h1, buttonText } = data;
  return (
    <div className={styles.slide} style={{ backgroundImage: `url(${Slidebackground.src})` }}>
      {/* <div className={styles.slide__background}></div> */}
      <div className={styles.slide__text}>
        {h1 ? <h1 className={styles.slide__title}>{title}</h1> : <h2 className={styles.slide__title}>{title}</h2>}
        <p className={styles.slide__subtitle}>{subtitle}</p>
        <Button text={buttonText} onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default Slide;
