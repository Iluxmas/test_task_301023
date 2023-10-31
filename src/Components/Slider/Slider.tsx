'use client';
import React, { createContext, useEffect, useState } from 'react';
import styles from './Slider.module.css';
import Pagination from '../Pagination/Pagination';
import SlidesList from '../SlidesList/SlidesList';
import Arrows from '../Arrows/Arrows';
import { slidesData } from '@/data/slidesData';

type SlideData = {
  title: string;
  h1: boolean;
  subtitle: string;
  buttonText: string;
  backgroundColor: string;
};

export type SliderContextType = {
  goToSlide: (slide: number) => void;
  changeSlide: (currSlide: number, slide: number) => void;
  slidesCount: number;
  slideNumber: number;
  slidesData: SlideData[];
  onButtonClick: () => void;
};

export const SliderContext = createContext<SliderContextType | undefined>(undefined);

interface SliderProps {
  onModalOpen: () => void;
}

function Slider({ onModalOpen }: SliderProps) {
  const [selectedId, setSelectedId] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(selectedId, 1);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [selectedId]);

  const changeSlide = (currSlide: number, direction = 1) => {
    let slideNumber = 0;

    if (currSlide + direction < 0) {
      slideNumber = slidesData.length - 1;
    } else {
      slideNumber = (currSlide + direction) % slidesData.length;
    }

    setSelectedId(slideNumber);
  };

  const goToSlide = (num: number) => {
    setSelectedId(num % slidesData.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    console.log(e);
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchPosition === null) {
      return;
    }
    console.log(e);
    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(selectedId, 1);
    }

    if (direction < -10) {
      changeSlide(selectedId, -1);
    }

    setTouchPosition(null);
  };

  return (
    <section className={styles.banner}>
      <div className={styles.slider} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        <SliderContext.Provider
          value={{
            goToSlide,
            changeSlide,
            slidesCount: slidesData.length,
            slideNumber: selectedId,
            slidesData,
            onButtonClick: onModalOpen,
          }}
        >
          <SlidesList />
          <Pagination />
          <Arrows />
        </SliderContext.Provider>
      </div>
    </section>
  );
}

export default Slider;
