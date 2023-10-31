import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import styles from './layout.module.css';
import Header from '@/Components/Header/Header';

const Gilroy = localFont({
  src: [
    {
      path: '../../public/fonts/gilroy/Gilroy-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/gilroy/Gilroy-Regular.ttf',
      weight: '400',
      style: 'regular',
    },
  ],
  display: 'swap',
  variable: '--font-gilroy',
});

const Nekst = localFont({
  src: [
    {
      path: '../../public/fonts/nekst/Nekst-Black.otf',
      weight: '900',
      style: 'black',
    },
  ],
  display: 'swap',
  variable: '--font-nekst',
});

export const metadata: Metadata = {
  title: 'Рассчет лизинга',
  description: 'Прием заявки на лизинг',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body className={[Gilroy.variable, Nekst.variable].join(' ')}>
        <div id='portal'></div>
        {children}
      </body>
    </html>
  );
}
