'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './Input.module.css';
import local from 'next/font/local';

interface InputProps {
  title: string;
  min: number;
  max: number;
  carCost?: number;
  name: string;
  type?: 'default' | 'percent';
  value: number;
  step: number;
  units: string;
  onChangeHandler: (val: number) => void;
}

function Input({ title, min, max, name, value, step, carCost, type = 'default', onChangeHandler, units }: InputProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const [progressWidth, setProgressWidth] = useState(0);

  const inputContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEnterClick = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (!localValue) return;
        if (localValue < min) onChangeHandler(min);
        else if (localValue > max) onChangeHandler(max);
        else onChangeHandler(localValue);
        setIsEditing(false);
      }
    };

    if (isEditing) {
      document.addEventListener('keydown', handleEnterClick);
    } else {
      document.removeEventListener('keydown', handleEnterClick);
    }
    return () => {
      document.removeEventListener('keydown', handleEnterClick);
    };
  }, [isEditing, localValue]);

  let displayValue = value.toLocaleString('ru');

  if (carCost) {
    displayValue = ((carCost * value) / 100).toLocaleString('ru') + ' ₽';
  }

  const handleLabelClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;

    setLocalValue(value);
  };

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;

    if (!inputContainer.current) return;

    const width = ((value - min) / (max - min)) * (inputContainer.current.getBoundingClientRect().width - 48);
    console.log('test1');
    setProgressWidth(width);
    setLocalValue(value);
    onChangeHandler(value);
  };

  const handleInputBlur = () => {
    if (!localValue) return;
    if (!inputContainer.current) return;
    let width = 0;

    if (localValue < min) {
      onChangeHandler(min);
      setLocalValue(min);
    } else if (localValue > max) {
      onChangeHandler(max);
      setLocalValue(max);
      width = inputContainer.current.getBoundingClientRect().width - 48;
    } else {
      onChangeHandler(localValue);
      width = ((localValue - min) / (max - min)) * (inputContainer.current.getBoundingClientRect().width - 48);
    }

    setProgressWidth(width);
    setIsEditing(false);
  };

  return (
    <div className={styles.input}>
      <p className={styles.input__title}>{title}</p>
      <div className={styles.input__container} ref={inputContainer}>
        {isEditing && type !== 'percent' ? (
          <input
            type='number'
            name={name}
            value={localValue}
            autoFocus
            className={styles.input__keyboard}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        ) : (
          <label htmlFor='' onClick={handleLabelClick} className={styles.input__label}>
            {displayValue}
          </label>
        )}

        {type === 'percent' ? (
          <span className={styles.input__units_percent}>
            {value}
            {units}
          </span>
        ) : (
          <span className={styles.input__units}>{units}</span>
        )}

        <input
          type='range'
          className={styles.input__range}
          name={`${name}_range`}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleRangeChange}
        />
        <div className={styles.input__progress} style={{ width: `${progressWidth}px` }}></div>
      </div>
    </div>
  );
}

export default Input;
