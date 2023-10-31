import React, { useContext } from 'react';
import Slide from '../Slide/Slide';
import { SliderContext } from '../Slider/Slider';

import styles from './SlidesList.module.css';

export default function SlidesList() {
  const { slideNumber, slidesData, onButtonClick } = useContext(SliderContext)!;

  return (
    <div className={styles.slider__container} style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
      {slidesData.map((slide, index) => (
        <Slide key={index} data={slide} onButtonClick={onButtonClick} />
      ))}
    </div>
  );
}
