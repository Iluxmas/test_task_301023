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
  title: 'Расчет лизинга',
  description: 'Прием заявки на лизинг',
  openGraph: {
    title: 'Тестовое Задание Oxem',
    description: 'Простой лендинг по расчету лизинга',
    url: 'https://test-task-301023.vercel.app/',
    siteName: 'Расчет лизинга',
    images: [
      {
        url: 'https://github.com/Iluxmas/test_task_301023/blob/main/public/images/banner_car.jpg',
        width: 841,
        height: 472,
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
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
