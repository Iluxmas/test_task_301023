import React, { useContext } from 'react';
import { SliderContext } from '../Slider/Slider';

import styles from './Dot.module.css';

interface DotProps {
  number: number;
}

function Dot({ number }: DotProps) {
  const { goToSlide, slideNumber } = useContext(SliderContext)!;

  return (
    <div
      className={slideNumber === number ? styles.slider__page_selected : styles.slider__page}
      onClick={() => goToSlide(number)}
    />
  );
}

export default Dot;
