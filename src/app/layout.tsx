import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import styles from './layout.module.css';
import Header from '@/Components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Рассчет лизинга',
  description: 'Прием заявки на лизинг',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <div className={styles.page}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
