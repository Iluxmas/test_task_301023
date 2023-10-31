import React from 'react';
import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';

interface HeaderProps {
  onModalOpen: () => void;
}

function Header({ onModalOpen }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <p className={styles.header__logo}>
            Leasing<span className={styles.header__logo_accent}>Car</span>
          </p>
          <span className={styles.header__description}>лизинговая компания</span>
        </div>
        <Navigation onModalOpen={onModalOpen} />
      </div>
    </header>
  );
}

export default Header;
