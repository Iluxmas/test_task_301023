import React, { CSSProperties } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  type?: 'outline' | 'default';
  text: string;
  style?: CSSProperties;
  className?: string;
  onButtonClick: () => void;
  disabled?: boolean;
}

function Button({ type = 'default', text, style, className, onButtonClick, disabled = false }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={[styles.button, className, styles[type]].join(' ')}
      style={style}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
}

export default Button;
