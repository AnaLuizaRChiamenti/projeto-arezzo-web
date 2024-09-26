import { useState } from 'react';
import CardNavList from '@/components/CardNavList';
import NavigationLane from '@/components/Navigation-lane';
import { Product } from '@/types/product';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import icon_filter from '/public/Images/Icones/icon-filter.png';
import Filter from '@/components/Filter';
import CardListPDC from '@/components/Card-list-pdc';

export const getStaticProps = (async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_DB_URL as string);
  const products = await res.json();
  return { props: { products } };
}) satisfies GetStaticProps<{
  products: Product[];
}>;

export default function HomePDC({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <section className="w-full">
      <div className="w-full pb-5 mb-5">
        <NavigationLane />
      </div>
      <div className="w-full">
        <CardNavList products={products} />
      </div>

      <div className="flex items-center">
        <button
          onClick={toggleFilter}
          className="flex ml-5 mt-5 items-center justify-center px-7 py-2 border-2 border-gray-400 rounded-full hover:bg-gray-300 transform bg-transparent md:w-36 lg:w-48 lg:h-16 xl:w-36 xl:h-12"
        >
          <Image
            src={icon_filter}
            alt="Ícone de filtrar"
            width={20}
            className="mr-2 md:w-6 lg:w-8 xl:w-5"
          />
          <span className="text-gray-700 md:text-lg lg:text-2xl xl:text-lg">
            Filtrar
          </span>
        </button>

        <div className="px-10 mt-4">
          <h3 className="uppercase tracking-widest text-xl md:text-lg lg:text-2xl xl:text-2xl font-sans">
            Sandálias
          </h3>
          <p className="hidden md:flex md:tracking-widest md:text-base lg:text-xl xl:text-sm font-sans text-gray-400">
            Peça-chave do guarda-roupa, as sandálias femininas da Arezzo
            traduzem e valorizam o estilo da mulher contemporânea.{' '}
          </p>
        </div>
      </div>

      <div>
        <CardListPDC products={products} />
        <div className="w-full flex items-center justify-center">
          <button className="flex items-center -tracking-tighter border border-gray-400 rounded-full px-12 py-4 mb-6 hover:bg-gray-300">
            Veja mais produtos
          </button>
        </div>
      </div>

      {isFilterVisible && (
        <>
          <div className="fixed flex items-center left-0 top-0 h-screen w-96 bg-white z-10">
            <Filter onClose={toggleFilter} />
          </div>
        </>
      )}
    </section>
  );
}
