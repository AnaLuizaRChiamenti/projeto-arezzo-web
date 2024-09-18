import Image from "next/image";
import localFont from "next/font/local";
import HomePage from "./home";
import Header from "./components/Header";


export default function Home() {
  return (
    <main>
      <Header />
      <HomePage />
    </main>
  );
}
