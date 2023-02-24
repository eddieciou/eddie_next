'use client';
import 'styles/globals.css';
import { ReactNode } from 'react';
import AppBar from '@/app/AppBar';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

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
          <AppBar />
          <div>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
