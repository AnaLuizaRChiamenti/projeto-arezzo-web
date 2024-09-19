import { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="relative antialiased">
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
