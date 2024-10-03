import { Product } from '@/types/product';
import ProductCard from '../Card';

interface ProductListProps {
  products: Product[];
}

export default function CardListPDC({ products }: ProductListProps) {
  const PRODUCT_ITEMS_LIMIT = 9;

  return (
    <div className="w-full mt-5 p-4 grid grid-cols-1 md:gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.slice(0, PRODUCT_ITEMS_LIMIT).map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
