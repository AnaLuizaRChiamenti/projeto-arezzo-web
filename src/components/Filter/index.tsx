import sizesList from '@/utils/sizes-list';
import icon_close from '/public/Images/Icones/icon-close.svg';
import icon_arrow from '/public/Images/Icones/icon-arrow.svg';
import Image from 'next/image';
import shoesList from '@/utils/shoes-list';

interface FilterComponentProps {
  onClose: () => void;
}

export default function Filter({ onClose }: FilterComponentProps) {
  return (
    <section className="p-8 relative bg-white flex flex-col">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-lg">Filtrar por</h2>
        <button className="text-xl" onClick={onClose}>
          <Image src={icon_close} width={20} alt="Botão para fechar o filtro" />
        </button>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg">Categorias</h3>
          <button className="text-xl">
            <Image src={icon_arrow} alt="Icone de flecha" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2 border-b pb-4">
          {shoesList.map((category, index) => (
            <button
              key={index}
              className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm hover:bg-slate-300"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg">Tamanho</h3>
          <button className="text-xl">
            <Image src={icon_arrow} alt="Icone de flecha" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {sizesList.map((size, index) => (
            <button
              key={index}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-slate-300"
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
