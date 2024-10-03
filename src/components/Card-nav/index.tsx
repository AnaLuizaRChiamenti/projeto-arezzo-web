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
  return (
    <div className="flex flex-col h-full bg-custom-grey-card p-2 items-center min-w-24 lg:min-w-44 2xl:min-w-36 ">
      <section className="relative w-full aspect-square flex-grow">
        {renderProductImage(product.images, product.name)}
      </section>
      <p className="text-xs -tracking-wider mt-2">
        {product.categories && product.categories.length > 0
          ? product.categories[0].code
          : 'Sem categoria'}
      </p>
    </div>
  );
}
