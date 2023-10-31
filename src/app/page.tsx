'use client';
import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import Slider from '@/Components/Slider/Slider';
import Calculator from '@/Components/Calculator/Calculator';
import RequestForm from '@/Components/RequestForm/RequestForm';

import styles from './page.module.css';
import Header from '@/Components/Header/Header';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleOpenModal = useCallback(() => setIsOpen(true), []);

  const handleFormSubmit = useCallback(
    (personalData: { name: string; telephone: string }) => {
      console.log({
        ...personalData,
        ...formData,
      });
    },
    [formData]
  );

  return (
    <div className={styles.page}>
      <Header onModalOpen={handleOpenModal} />
      <main>
        <Slider onModalOpen={handleOpenModal} />
        <Calculator onModalOpen={handleOpenModal} onRequest={(value) => setFormData(value)} />
        {isOpen &&
          createPortal(
            <RequestForm isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={handleFormSubmit} />,
            document.getElementById('portal') as HTMLElement
          )}
      </main>
    </div>
  );
}
