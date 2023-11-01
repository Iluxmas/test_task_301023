import React from 'react';
import styles from './Socials.module.css';

function Socials() {
  return (
    <ul className={styles.socials__list}>
      <li className={styles.socials__list_item}>
        <a href='#' className={[styles.social__link, styles.social__item_whatsapp].join(' ')} target='_blank'></a>
      </li>
      <li className={styles.socials__list_item}>
        <a href='#' className={[styles.social__link, styles.social__item_telegram].join(' ')} target='_blank'></a>
      </li>
    </ul>
  );
}

export default Socials;
