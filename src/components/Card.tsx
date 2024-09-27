import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const renderProductImage = (
  images: { url: string }[],
  alt: string,
  code: string
) => {
  if (images.length === 0) {
    return <p>Imagem não disponível</p>;
  }

  return (
    <Link href={`/novidades/${code}`}>
      <Image
        src={images[0].url}
        alt={alt}
        layout="fill"
        className="object-cover"
      />
    </Link>
  );
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center min-w-44 lg:min-w-64 2xl:min-w-96 h-auto">
      <div className="relative w-full aspect-[4/5] mb-2 flex-grow">
        {renderProductImage(product.images, product.name, product.code)}
      </div>
      <div className="w-full flex items-center px-2">
        <h2 className="text-sm truncate w-2/3">{product.name}</h2>
        <p className="text-sm font-bold truncate w-1/3 text-right">
          {product.price.formattedValue}
        </p>
      </div>
    </div>
  );
}
