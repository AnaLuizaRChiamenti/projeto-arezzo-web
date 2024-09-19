import Image from "next/image";
import img_main_banner from '/public/Images/Banner/main_banner.png';
import Livia_banner from '/public/Images/Banner/banner_livia.webp'
import Header from "../components/Header";


export default function Home() {
  return (
    <>
      <section className="w-full">
        <Image
          src={Livia_banner}
          alt="banner com a Livia"
          className="absolute inset-0 w-full h-full object-cover object-bottom block lg:hidden"
        />
        <Image
          src={img_main_banner}
          alt="banner bolsa marrom"
          fill
          className="absolute inset-0 object-cover hidden lg:block"
        />
        <button className="uppercase absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-transparent border-2 border-white text-white px-4 py-2 rounded-full shadow-lg hover:bg-black z-20 text-xs md:text-lg lg:text-lg 2xl:text-sm">
          Confira
        </button>
        <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-2 z-10">
          <p className="text-xs tracking-widest uppercase md:text-xs">
            <strong>Frete FIXO</strong> em R$9,90 para regiões Sul, Sudeste e capitais de NE e CO.
          </p>
        </div>
      </section>
    </>
  );
}
