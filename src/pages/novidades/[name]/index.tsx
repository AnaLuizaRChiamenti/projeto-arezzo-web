import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import React from 'react';
import NavigationLane from '../../../components/Navigation-lane';
import { Product } from '../../../types/product';
import sizesList from '../../../utils/sizes-list';

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
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <>
      <div className="hidden md:block md:w-full md:pb-5 md:mb-8">
        <NavigationLane productName={product.name} />
      </div>
      <div className="w-full lg:grid lg:grid-cols-2 lg:gap-2 px-4 lg:px-8 mb-10">
        <div className="flex flex-wrap">
          {product.images.map((image, index) => (
            <div
              key={index}
              className={`w-full p-1 ${index === 0 ? 'block' : 'hidden'} sm:w-1/2 sm:block`}
            >
              <Image
                src={image.url}
                alt={product.name}
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-6 lg:mt-0 lg:px-8 2xl:w-3/3 2xl:ml-auto 2xl:flex 2xl:flex-col">
          <div className="border-b-2 pb-4">
            <h1 className="text-2xl -tracking-tighter">{product.name}</h1>
            <p className="-tracking-tighter font-bold text-lg pt-1">
              {product.price.formattedValue}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 border-b-2 pb-5">
            {sizesList.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(size)}
                className={`bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-slate-300 
                  ${selectedSize === size ? 'bg-slate-300' : ''}`}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="flex flex-col items-center w-full mt-5 border-b-2">
            <button className="w-full flex items-center justify-center -tracking-tighter border border-gray-400 rounded-full px-6 py-3 hover:bg-gray-300 2xl:w-2/3  ">
              Adicionar a sacola
            </button>
            <button className="w-full flex items-center justify-center text-white bg-green-700 -tracking-tighter border border-gray-400 rounded-full px-6 py-3 my-4 2xl:w-2/3">
              Comprar agora
            </button>
          </div>
          <div className="pt-5 pb-5 border-b-2">
            <h2 className="mb-2 text-lg -tracking-wide">Por que apostar?</h2>
            <p className="-tracking-wide">
              Com uma pegada urbana e descolada, os sapatos tratorados são
              tendência na estação e prometem modernizar qualquer look.
            </p>
          </div>
          <div className="py-5 space-y-2">
            <h2 className=" text-lg -tracking-wide">Detalhes do produto</h2>
            <p>
              <strong>Material:</strong> Couro com elástico na lateral e solado
              de borracha
            </p>
            <p>
              <strong>Cor:</strong> {product.color}
            </p>
            <p>
              <strong>Tamanho do salto:</strong> 5cm
            </p>
            <p>
              <strong>Descrição:</strong> {product.description}
            </p>
            <p>
              <strong>Referência:</strong> {product.code}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
