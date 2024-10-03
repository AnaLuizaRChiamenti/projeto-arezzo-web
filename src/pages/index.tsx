import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Product } from '@/types/product';
import Image from 'next/image';
import img_second_banner from '/public/Images/Banner/second_banner.png';
import img_second_banner_2 from '/public/Images/Banner/second_banner_2.png';
import img_main_banner from '/public/Images/Banner/main_banner.png';
import Livia_banner from '/public/Images/Banner/banner_livia.webp';
import CardList from '@/components/Card-list';
import Link from 'next/link';

export const getStaticProps = (async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_DB_URL);
  const products = await res.json();
  return { props: { products } };
}) satisfies GetStaticProps<{
  products: Product[];
}>;

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative overflow-hidden w-full h-screen">
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
            <strong>Frete FIXO</strong> em R$9,90 para regiões Sul, Sudeste e
            capitais de NE e CO.
          </p>
        </div>
      </section>

      <section className="w-full h-screen md:h-auto md:items-end flex flex-wrap items-center py-3 px-8 2xl:py-16 2xl:px-32">
        <div className="w-1/2 lg:w-1/3 flex flex-col 2xl:self-stretch 2xl:justify-between">
          <div>
            <h1 className="text-lg uppercase mb-4 md:text-xl">Nova Coleção</h1>
            <h2 className="text-sm mb-6 md:text-3xl tracking-widest">
              #LIVIAAREZZO
            </h2>
          </div>
          <Image
            src={img_second_banner_2}
            className="w-36 md:w-full md:pr-1 lg:w-full xl:w-full 2xl:w-full"
            alt="Modelo Livia com o coturno preto e a sola tratorada rosa"
          />
        </div>

        <div className="w-1/2 lg:w-1/3 flex flex-col mt-6 md:mt-0 lg:flex-row lg:items-end">
          <Image
            src={img_second_banner}
            className="w-36 md:w-full md:pl-1 lg:w-full xl:w-full 2xl:w-full"
            alt="Modelo Livia com o coturno preto e a sola tratorada rosa"
          />
        </div>

        <div className="w-full flex flex-col bg-white p-4 text-center md:w-full lg:w-1/3 lg:text-left">
          <p className="font-semibold tracking-wide lg:text-lg">
            Conheça o novo coturno
          </p>
          <p className="mb-4 tracking-tight lg:text-xl">Livia Arezzo</p>
          <button className="text-sm bg-black text-white px-4 py-2 rounded-full lg:w-2/2 lg:text-xl xl:w-1/2">
            Ver coleção
          </button>
        </div>
      </section>

      <section className="w-full h-full py-10 flex flex-col">
        <div className="w-full px-10 py-10 flex items-center justify-between">
          <h2 className="font-light text-xl leading-[32px] tracking-widest text-left uppercase">
            Apostas da semana
          </h2>
          <div className="tracking-tight leading-3 font-light underline text-sm">
            <Link href={'/novidades'}>Ver todos os produtos</Link>
          </div>
        </div>
        <div>
          <CardList products={products} />
        </div>
      </section>
    </div>
  );
}
