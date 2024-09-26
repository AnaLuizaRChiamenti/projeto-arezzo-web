import { Product } from '@/types/product';
import ProductCard from './Card';

interface ProductListProps {
  products: Product[];
}

export default function CardList({ products }: ProductListProps) {
  const PRODUCT_ITEMS_LIMIT = 5;

  return (
    <div className="w-full flex overflow-x-auto space-x-4">
      {products.slice(0, PRODUCT_ITEMS_LIMIT).map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
