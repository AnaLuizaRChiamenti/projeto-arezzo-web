import { Product } from '@/types/product';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface ProductCardProps {
  product: Product;
}

const renderProductImage = (
  images: { url: string }[],
  alt: string,
  onClick: () => void
) => {
  if (images.length === 0) {
    return <p>Imagem não disponível</p>;
  }

  return (
    <button onClick={onClick}>
      <Image
        src={images[0].url}
        alt={alt}
        layout="fill"
        className="object-cover"
      />
    </button>
  );
};

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/novidades/${product.code}`);
  };

  return (
    <div className="flex flex-col items-center min-w-44 lg:min-w-64 2xl:min-w-96 h-auto">
      <div className="relative w-full aspect-[4/5] mb-2 flex-grow">
        {renderProductImage(product.images, product.name, handleClick)}
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
