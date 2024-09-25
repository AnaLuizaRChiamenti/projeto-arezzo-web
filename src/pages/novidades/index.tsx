import CardListPDC from '@/components/Card-list-pdc';
import { Product } from '@/types/product';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps = (async () => {
  const res = await fetch('http://localhost:3001/products');
  const products = await res.json();
  return { props: { products } };
}) satisfies GetStaticProps<{
  products: Product[];
}>;

export default function homePDC({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section>
      <CardListPDC products={products} />
      <div className="w-full flex items-center justify-center">
        <button className="flex items-center -tracking-tighter border border-gray-400 rounded-full px-12 py-4 mb-6 hover:bg-gray-300">
          Veja mais produtos
        </button>
      </div>
    </section>
  );
}
