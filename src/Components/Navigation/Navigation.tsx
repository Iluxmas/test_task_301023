'use client';

import React, { useState } from 'react';
import styles from './Navigation.module.css';

function Navigation(props) {
  const [isOpened, setIsOpened] = useState(false);

  const menuClass = [styles.nav];
  if (isOpened) menuClass.push(styles.nav__opened);

  return (
    <>
      <div className={styles.nav__burger} onClick={() => setIsOpened(true)}></div>
      <nav className={menuClass.join(' ')}>
        <div className={styles.nav__close} onClick={() => setIsOpened(false)}></div>
        <ul className={styles.nav__list}>
          <li className={styles.nav__list_item}>
            <a href='#' className={styles.nav__link}>
              Лизинг
            </a>
            <ul className={styles.nav__submenu}>
              <li className={styles.nav__submenu_list_item}>
                <a href='#' className={styles.nav__submenu_link}>
                  Для личного пользования
                </a>
              </li>
              <li className={styles.nav__submenu_list_item}>
                <a href='#' className={styles.nav__submenu_link}>
                  Для юридических лиц
                </a>
              </li>
              <li className={styles.nav__submenu_list_item}>
                <a href='#' className={styles.nav__submenu_link}>
                  Калькулятор
                </a>
              </li>
            </ul>
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
        <button className={styles.nav__button}>Оставить заявку</button>
      </nav>
    </>
  );
}

export default Navigation;
