import { Commissioner } from 'next/font/google';
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const commissioner = Commissioner({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-commissioner',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${commissioner.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
