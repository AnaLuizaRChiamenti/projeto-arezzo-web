import { Product } from '@/types/product';
import ProductCard from './Card';

interface ProductListProps {
    products: Product[];
}

export default function CardList({ products }: ProductListProps) {
    return (
        <div className="w-full flex overflow-x-auto space-x-4">
            {products.slice(0, 5).map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
}
