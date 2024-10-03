import { Commissioner } from 'next/font/google';
import type { AppProps } from 'next/app';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const commissioner = Commissioner({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-commissioner',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${commissioner.variable} flex flex-col min-h-screen`}>
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
