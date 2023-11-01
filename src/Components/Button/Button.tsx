import React, { CSSProperties } from 'react';
import styles from './Button.module.css';
import Spinner from '../Spinner/Spinner';

interface ButtonProps {
  type?: 'outline' | 'default';
  text: string;
  style?: CSSProperties;
  className?: string;
  onButtonClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

function Button({ type = 'default', text, style, className, onButtonClick, disabled = false, isLoading }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={[styles.button, styles[type], className].join(' ')}
      style={style}
      onClick={onButtonClick}
    >
      {isLoading ? <Spinner /> : text}
    </button>
  );
}

export default Button;
