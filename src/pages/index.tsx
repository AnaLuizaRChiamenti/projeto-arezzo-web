import Image from "next/image";
import img_main_banner from '/public/Images/Banner/main_banner.png';
import Livia_banner from '/public/Images/Banner/banner_livia.webp'
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Product } from "@/types/product";
import Card from "@/components/Card";



export const getStaticProps = (async () => {
  const res = await fetch('http://localhost:3001/products')
  const products = await res.json()
  return { props: { products } }
}) satisfies GetStaticProps<{
  products: Product
}>


export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-screen">
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
        <button className="uppercase absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-transparent border-2 border-white text-white px-4 py-2 rounded-full shadow-lg hover:bg-black z-20 text-sm">
          Confira
        </button>
        <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-2 z-10">
          <p className="text-xs tracking-widest uppercase md:text-xs">
            <strong>Frete FIXO</strong> em R$9,90 para regiões Sul, Sudeste e capitais de NE e CO.
          </p>
        </div>
      </section>

      <section className="w-full h-full py-10 flex flex-col">
        <div className="w-full px-10 py-10 flex items-center justify-between">
          <h2 className="font-light text-xl leading-[32px] tracking-[4px] text-left uppercase">
            Apostas da semana
          </h2>
          <div className="tracking-tight leading-3 font-light underline text-sm">
            <p>Ver todos os produtos</p>
          </div>
        </div>
        <div>
          <Card products={products} />
        </div>

      </section>
    </div>
  );
} 
