import React, { useContext } from 'react';
import { SliderContext } from '../Slider/Slider';
import styles from './Pagination.module.css';
import Dot from '../Dot/Dot';

function Pagination(props) {
  const { slidesCount } = useContext(SliderContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }

    return dots;
  };

  return <div className={styles.slider__pagination}>{renderDots()}</div>;
}

export default Pagination;
