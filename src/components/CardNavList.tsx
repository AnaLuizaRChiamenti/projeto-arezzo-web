import { Product } from '@/types/product';
import CardNav from './CardNav';

interface ProductListProps {
  products: Product[];
}

export default function CardNavList({ products }: ProductListProps) {
  return (
    <div className="w-full flex overflow-x-auto">
      {products.slice(0, 5).map((product, index) => (
        <CardNav key={index} product={product} />
      ))}
    </div>
  );
}
