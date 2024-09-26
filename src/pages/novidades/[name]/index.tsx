import { Product } from '@/types/product';
import sizesList from '@/utils/sizes-list';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';

interface ProductPageProps {
  product: Product;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params!;
  const res = await fetch(`http://localhost:3001/products?code=${name}`);
  const products = await res.json();

  return {
    props: {
      product: products[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3001/products');
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { name: product.code },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <div className="w-full">
      <div className="relative w-96 h-96">
        <Image
          src={product.images[0]?.url}
          alt={product.name}
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="px-6 mt-5">
        <div className="border-b-2 pb-4">
          <h1 className="-tracking-tighter">{product.name}</h1>
          <p className="-tracking-tighter font-bold pt-1">
            {product.price.formattedValue}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 border-b-2 pb-5">
          {sizesList.map((size, index) => (
            <button
              key={index}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-slate-300"
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center w-full mt-5">
          <button className="w-full flex items-center justify-center -tracking-tighter border border-gray-400 rounded-full px-6 py-3 hover:bg-gray-300">
            Adicionar a sacola
          </button>
          <button className="w-full flex items-center justify-center text-white bg-green-700 -tracking-tighter border border-gray-400 rounded-full px-6 py-3 my-4 hover:bg-gray-300">
            Comprar agora
          </button>
        </div>

        <div>
          <div className="pb-5 border-b-2">
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
    </div>
  );
}
