import React from 'react';
import styles from './Header.module.css';

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <p className={styles.header__logo}>
            Leasing<span className={styles.header__logo_accent}>Car</span>
          </p>
          <span className={styles.header__description}>лизинговая компания</span>
        </div>
        <div className={styles.nav__burger}></div>
        <div className={styles.header__right}>
          <div className={styles.nav__close}></div>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__list_item}>
                <a href='#' className={styles.nav__link}>
                  Лизинг
                </a>
              </li>
              <li className={styles.nav__list_item}>
                <a href='#' className={styles.nav__link}>
                  Каталог
                </a>
              </li>
              <li className={styles.nav__list_item}>
                <a href='#' className={styles.nav__link}>
                  О нас
                </a>
              </li>
            </ul>
          </nav>
          <button className={styles.nav__button}>Оставить заявку</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
