import React, { useEffect, useState } from 'react';
import styles from './TimerIndicator.module.css';

const TimerIndicator = ({ duration, id }: { duration: number; id: number }) => {
  const [remainingPercentage, setRemainingPercentage] = useState(145);

  useEffect(() => {
    let startTime: number | null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const newRemainingPercentage = ((duration - elapsedTime) / duration) * 145.66;

      setRemainingPercentage(Math.max(newRemainingPercentage, 0));

      if (elapsedTime < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setRemainingPercentage(0);
        startTime = null;
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [id]);

  return (
    <div className={styles.timer}>
      <svg className={styles.circular__progress} width='48' height='48' viewBox='0 0 48 48'>
        <circle className={styles.circle__background} cx='24' cy='24' r='23' />
        <circle
          className={styles.circle__fill}
          cx='24'
          cy='24'
          r='23'
          strokeDasharray='145.66'
          strokeDashoffset={145.66 - remainingPercentage}
        />
      </svg>
    </div>
  );
};

export default TimerIndicator;
