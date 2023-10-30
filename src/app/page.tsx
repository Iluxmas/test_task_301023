import Image from 'next/image';
import Banner from '@/Components/Banner/Banner';
import Calculator from '@/Components/Calculator/Calculator';
import Form from '@/Components/Form/Form';

import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Banner />
      <Calculator />
      <Form />
    </main>
  );
}
