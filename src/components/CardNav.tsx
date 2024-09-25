import { Product } from '@/types/product';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

const renderProductImage = (images: { url: string }[], alt: string) => {
  if (images.length < 0) {
    return <p>Imagem não disponível</p>;
  }

  return (
    <Image
      src={images[0].url}
      alt={alt}
      layout="fill"
      className="object-cover"
    />
  );
};

export default function CardNav({ product }: ProductCardProps) {
  console.log(product);

  return (
    <div className="flex flex-col h-full bg-custom-grey-card p-2 items-center min-w-[100px] lg:min-w-[170px] 2xl:min-w-[150px] ">
      <section className="relative w-full aspect-[4/5] flex-grow">
        {renderProductImage(product.images, product.name)}
      </section>
      <p className="text-xs tracking-wide">
        {product.categories && product.categories.length > 0
          ? product.categories[0].code
          : 'Sem categoria'}
      </p>
    </div>
  );
}
