'use client';
import React, { useState } from 'react';
import styles from './RequestForm.module.css';
import Button from '../Button/Button';
import { InputMask } from '@react-input/mask';
import Socials from '../Socials/Socials';

interface RequestFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: { name: string; telephone: string }) => void;
}

function RequestForm({ isOpen, onClose, onSubmit }: RequestFormProps) {
  const [telephone, setTelephone] = useState('');
  const [name, setName] = useState('');

  let formClass = isOpen ? [styles.modal, styles.modal_slidedown] : [styles.form];

  const handleSumbit = () => {
    if (!name || !telephone) {
      console.log('ставим erorr стили на инпуты');
      return;
    }
    onSubmit({ name, telephone });
  };

  return (
    <div className={styles.overlay}>
      <div className={formClass.join(' ')}>
        <div className={styles.form__container}>
          <div className={styles.form__close} onClick={onClose}></div>
          <p className={styles.form__title}>Онлайн-заявка</p>
          <p className={styles.form__subtitle}>
            Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все вопросы
          </p>
          <form className={styles.form__inputs_container}>
            <div className={styles.form__input}>
              <InputMask
                mask='+7 (XXX) XXX-XX-XX'
                replacement='X'
                showMask={true}
                className={styles.form__input_element}
                value={telephone}
                onMask={(e) => setTelephone(e.detail.value)}
              />
              <span className={styles.form__label}>Телефон *</span>
            </div>
            <div className={styles.form__input}>
              <input
                type='text'
                placeholder='Имя'
                value={name}
                className={styles.form__input_element}
                onChange={(e) => setName(e.target.value)}
              />
              <span className={styles.form__label}>Имя *</span>
            </div>
          </form>
          <div className={styles.form__agreement_container}>
            <Button
              text='Оставить заявку'
              className={styles.form__submit}
              onButtonClick={handleSumbit}
              disabled={!name || !telephone}
            />
            <p className={styles.form__agreement_text}>
              Нажимая на кнопку «Оставить заявку», я даю согласие{' '}
              <a href='#' target='_blank' className={styles.form__agreement_link}>
                на обработку персональных данных
              </a>
            </p>
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default RequestForm;
