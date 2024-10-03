import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import React from 'react';
import { Product } from '@/types/product';
import sizesList from '@/utils/sizes-list';
import icon_favorite from '/public/Images/Icones/icon-favorite.svg';
import NavigationLane from '@/components/Navigation-lane';

const FIRST_INDEX = 0;
interface ProductPageProps {
  product: Product;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params!;
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}?code=${name}`);
  const products = await res.json();

  return {
    props: {
      product: products[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_DB_URL as string);
  const products: Product[] = await res.json();
  const paths = products.map((product) => ({
    params: { name: product.code },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default function ProductPage({ product }: ProductPageProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const productDetails = [
    {
      label: 'Material',
      value: 'Couro com elástico na lateral e solado de borracha',
    },
    { label: 'Cor', value: product.color },
    { label: 'Tamanho do salto', value: '5cm' },
    { label: 'Descrição', value: product.description },
    { label: 'Referência', value: product.code },
  ];

  const getImageMobile = (index: number) => {
    return `w-full p-4 ${index === FIRST_INDEX ? 'block' : 'hidden'} sm:w-1/2 sm:block`;
  };

  const hoverInSelectedSize = (selectedSize: string, size: string) => {
    return `bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-slate-300
        ${selectedSize === size ? 'bg-slate-300' : ''}`;
  };

  return (
    <>
      <div className="hidden md:block md:w-full md:pb-5 md:mb-8">
        <NavigationLane productName={product.name} />
      </div>
      <div className="w-full lg:flex lg:gap-2 px-4 mb-10">
        <div className="w-full flex flex-wrap  2xl:w-3/4">
          {product.images.map((image, index) => (
            <div key={index} className={getImageMobile(index)}>
              <Image
                src={image.url}
                alt={product.name}
                width={400}
                height={300}
                className="object-cover 2xl:w-full"
              />
            </div>
          ))}
        </div>
        <div className="mt-6 lg:mt-0 xl:pl-5 lg:w-3/3 xl:w-3/4 2xl:w-2/5 2xl:flex 2xl:flex-col 2xl:px-20">
          <div className="border-b-2 pb-4">
            <div className="flex items-start justify-between">
              <h1 className="text-2xl -tracking-wider">{product.name}</h1>
              <button>
                <Image
                  src={icon_favorite}
                  alt="ícone de favoritos"
                  className="w-6 ml-2 md:w-8 lg:w-7 xl:w-7"
                />
              </button>
            </div>
            <p className="-tracking-tighter font-bold text-lg pt-1">
              {product.price.formattedValue}
            </p>
          </div>
          <div className="w-full mt-3">
            <p className="-tracking-tighter font-semibold text-sm pt-1">
              Tamanho
            </p>
            <div className="flex flex-wrap gap-2 mt-4 border-b-2 pb-5">
              {sizesList.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={hoverInSelectedSize(selectedSize, size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center w-full mt-5 border-b-2">
            <button className="w-full flex items-center justify-center -tracking-tighter border border-gray-400 rounded-full px-6 py-3 hover:bg-gray-300">
              Adicionar a sacola
            </button>
            <button className="w-full flex items-center justify-center text-white bg-custom-green-buy-button -tracking-tighter border border-gray-400 rounded-full px-8 py-4  my-4">
              Comprar agora
            </button>
          </div>
          <div className="pt-5 pb-5 border-b-2">
            <h2 className="mb-2 text-lg -tracking-wide">Por que apostar?</h2>
            <p className="text-sm -tracking-wide">
              Com uma pegada urbana e descolada, os sapatos tratorados são
              tendência na estação e prometem modernizar qualquer look.
            </p>
          </div>
          <div className="py-5 space-y-2">
            <h2 className="text-lg -tracking-wide">Detalhes do produto</h2>
            {productDetails.map((detail, index) => (
              <p key={index} className="text-sm -tracking-wide">
                <strong>{detail.label}:</strong> {detail.value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
