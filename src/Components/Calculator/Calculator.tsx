'use client';

import React, { useMemo, useState } from 'react';
import styles from './Calculator.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import InputPercent from '../Input/InputPercent';
import {
  COST_MAX_VALUE,
  COST_MIN_VALUE,
  PERCENT_MAX_VALUE,
  PERCENT_MIN_VALUE,
  PERIOD_MAX_VALUE,
  PERIOD_MIN_VALUE,
  RATE,
} from '@/data/calculatorData';

interface CalculatorProps {
  onModalOpen: () => void;
  onRequest: (value: { cost: number; period: number; percent: number }) => void;
}

function Calculator({ onModalOpen, onRequest }: CalculatorProps) {
  const [cost, setCost] = useState(COST_MIN_VALUE);
  const [percent, setPercent] = useState(PERCENT_MIN_VALUE);
  const [period, setPeriod] = useState(PERIOD_MIN_VALUE);

  const initial = (percent * cost) / 100;

  const monthlyPay = useMemo(() => {
    return Math.floor((cost - initial) * ((RATE * (1 + RATE) ** period) / ((1 + RATE) ** period - 1)));
  }, [cost, percent, period]);

  const contractSum = useMemo(() => {
    return Math.floor(initial + period * monthlyPay);
  }, [cost, monthlyPay, period]);

  const handleRequest = () => {
    const data = { cost, period, percent };
    onRequest(data);
    onModalOpen();
  };

  return (
    <section className={styles.calculator}>
      <h3 className={styles.calculator__title}>Рассчитайте стоимость автомобиля в лизинг</h3>
      <div className={styles.calculator__inputs_wrappper}>
        <Input
          title='Стоимость автомобиля'
          min={COST_MIN_VALUE}
          max={COST_MAX_VALUE}
          name='cost'
          value={cost}
          step={10000}
          onChangeHandler={(val) => setCost(val)}
          units='₽'
        />
        <InputPercent
          title='Первоначальный взнос'
          min={PERCENT_MIN_VALUE}
          max={PERCENT_MAX_VALUE}
          carCost={cost}
          name='percent'
          value={percent}
          step={1}
          onChangeHandler={(val) => setPercent(val)}
          type='percent'
          units='%'
        />
        <Input
          title='Срок лизинга'
          min={PERIOD_MIN_VALUE}
          max={PERIOD_MAX_VALUE}
          value={period}
          name='period'
          step={1}
          onChangeHandler={(val) => setPeriod(val)}
          units='мес.'
        />
      </div>
      <div className={styles.calculator__summary}>
        <div className={styles.summary__block}>
          <p className={styles.summary__title}>Сумма договора лизинга</p>
          <p className={styles.summary__value}>{contractSum.toLocaleString('ru')} ₽</p>
        </div>
        <div className={styles.summary__block}>
          <p className={styles.summary__title}>Ежемесячный платеж от</p>
          <p className={styles.summary__value}>{monthlyPay.toLocaleString('ru')}</p>
        </div>
        <Button text='Оставить заявку' className={styles.calculator__button} onButtonClick={handleRequest} />
      </div>
    </section>
  );
}

export default Calculator;
