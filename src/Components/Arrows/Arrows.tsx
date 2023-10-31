import React, { useContext } from 'react';
import { SliderContext } from '../Slider/Slider';
import TimerIndicator from '../TimerIndicator/TimerIndicator';

import styles from './Arrows.module.css';

function Arrows() {
  const { slideNumber, changeSlide } = useContext(SliderContext)!;

  return (
    <div className={styles.slider__switcher}>
      <div className={styles.slider__prev} onClick={() => changeSlide(slideNumber, -1)} />
      <div className={styles.slider__next} onClick={() => changeSlide(slideNumber, 1)} />
      <TimerIndicator duration={10000} />
    </div>
  );
}
export default Arrows;
