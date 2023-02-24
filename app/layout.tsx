'use client';
import 'styles/globals.css';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import Footer from '@/app/Footer';
import Header from '@/app/Header';

interface IRootLayoutProps {
  children: ReactNode;
  session: Session;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang='zh_Hant_TW'>
      <head />
      <body>
        <SessionProvider>
          <Header />
          <main className='my-32 overflow-hidden overscroll-none'>{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
