import CardNavList from '@/components/CardNavList';
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
    <section className="">
      <div>
        <CardNavList products={products} />
      </div>
    </section>
  );
}
