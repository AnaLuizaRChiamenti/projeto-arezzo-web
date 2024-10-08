import React from 'react';
import CardNav from '../Card-nav';
import { Product } from '../../types/product';

interface ProductListProps {
  products: Product[];
}

export default function CardNavList({ products }: ProductListProps) {
  const PRODUCT_ITEMS_LIMIT = 5;

  return (
    <div className="w-full justify-center border-b-2 gap-8 p-5 flex overflow-x-auto">
      {products.slice(0, PRODUCT_ITEMS_LIMIT).map((product, index) => (
        <CardNav key={index} product={product} />
      ))}
    </div>
  );
}
