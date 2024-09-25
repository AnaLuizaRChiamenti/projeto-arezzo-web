import Image from 'next/image';
import icon_filter from '/public/Images/Icones/icon-filter.png';
import { useState } from 'react';
import Filter from '@/components/Filter';

export default function HomePDC() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <section className="relative flex items-center justify-center py-6 md:justify-start md:px-10 lg:px-16">
      <button
        onClick={toggleFilter}
        className="flex items-center justify-center px-7 py-2 border-2 border-gray-400 rounded-full hover:bg-gray-300 transform bg-transparent md:w-36 lg:w-48 lg:h-16 xl:w-36 xl:h-12"
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

      <div className="px-10">
        <h3 className="uppercase tracking-widest md:text-lg lg:text-2xl xl:text-2xl font-sans">
          Sandálias
        </h3>
        <p className="hidden md:flex md:tracking-widest md:text-base lg:text-xl xl:text-sm font-sans text-gray-400">
          Peça-chave do guarda-roupa, as sandálias femininas da Arezzo traduzem
          e valorizam o estilo da mulher contemporânea.{' '}
        </p>
      </div>

      {isFilterVisible && (
        <>
          <div className="fixed left-0 top-52 h-screen w-96 bg-white z-10">
            <Filter onClose={toggleFilter} />
          </div>
        </>
      )}
    </section>
  );
}
