'use client';
import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import Slider from '@/Components/Slider/Slider';
import Calculator from '@/Components/Calculator/Calculator';
import RequestForm from '@/Components/RequestForm/RequestForm';
import Header from '@/Components/Header/Header';
import { COST_MIN_VALUE, PERCENT_MIN_VALUE, PERIOD_MIN_VALUE } from '@/data/calculatorData';

import styles from './page.module.css';

const defaultCalcValue = { cost: COST_MIN_VALUE, period: PERCENT_MIN_VALUE, percent: PERIOD_MIN_VALUE };

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(defaultCalcValue);

  const handleOpenModal = useCallback(() => setIsOpen(true), []);

  return (
    <div className={styles.page}>
      <Header onModalOpen={handleOpenModal} />
      <main>
        <Slider onModalOpen={handleOpenModal} />
        <Calculator onModalOpen={handleOpenModal} onRequest={(value) => setFormData(value)} />
        {isOpen &&
          createPortal(
            <RequestForm isOpen={isOpen} onClose={() => setIsOpen(false)} formData={formData} />,
            document.getElementById('portal') as HTMLElement
          )}
      </main>
    </div>
  );
}
