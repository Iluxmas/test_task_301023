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
        <div className={styles.header__right}>
          <nav className={styles.header__nav}>
            <ul className={styles.header__nav_list}>
              <li className={styles.header__list_item}>
                <a href='#' className={styles.header__nav_link}>
                  Лизинг
                </a>
              </li>
              <li className={styles.header__list_item}>
                <a href='#' className={styles.header__nav_link}>
                  Каталог
                </a>
              </li>
              <li className={styles.header__list_item}>
                <a href='#' className={styles.header__nav_link}>
                  О нас
                </a>
              </li>
            </ul>
          </nav>
          <button className={styles.header__button}>Оставить заявку</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
