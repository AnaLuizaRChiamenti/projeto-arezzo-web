import Image from 'next/image';
import React, { useState } from 'react';
import shoesList from '../../utils/shoes-list';
import icon_close from '../../../public/Images/Icones/icon-close.svg';
import icon_arrow from '../../../public/Images/Icones/icon-arrow.svg';
import sizesList from '../../utils/sizes-list';

interface FilterComponentProps {
  onClose: () => void;
}

const getRotationClass = (isOpen: boolean): string => {
  return isOpen ? 'rotate-180' : '';
};

export default function Filter({ onClose }: FilterComponentProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);

  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
  const toggleSize = () => setIsSizeOpen(!isSizeOpen);

  return (
    <section className="w-full p-8 relative bg-white flex flex-col">
      <div className="flex justify-between items-center border-b pb-8 mb-4">
        <h2 className="text-lg">Filtrar por</h2>
        <button className="text-xl" onClick={onClose}>
          <Image src={icon_close} width={20} alt="Botão para fechar o filtro" />
        </button>
      </div>

      <div className="mb-6 w-full">
        <div className="flex justify-between items-center mb-2 w-full">
          <h3 className="text-lg">Categorias</h3>
          <button className="text-xl" onClick={toggleCategory}>
            <Image
              src={icon_arrow}
              alt="Ícone de flecha"
              className={`transform transition-transform ${getRotationClass(isCategoryOpen)}`}
            />
          </button>
        </div>
        {isCategoryOpen && (
          <div className="flex flex-wrap gap-2 border-b pb-4 w-full">
            {shoesList.map((category, index) => (
              <button
                key={index}
                className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm hover:bg-slate-300"
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <div className="flex justify-between items-center mb-2 w-full">
          <h3 className="text-lg">Tamanho</h3>
          <button className="text-xl" onClick={toggleSize}>
            <Image
              src={icon_arrow}
              alt="Ícone de flecha"
              className={`transform transition-transform ${getRotationClass(isSizeOpen)}`}
            />
          </button>
        </div>
        {isSizeOpen && (
          <div className="flex flex-wrap gap-2 w-full">
            {sizesList.map((size, index) => (
              <button
                key={index}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-slate-300"
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
