import { Product } from "@/types/product";
import Image from "next/image";

interface ProductListProps {
    products: Product[];
}

export default function Card({ products }: ProductListProps) {
    return (
        <div className="w-full flex overflow-x-auto ">
            {products.slice(0, 5).map((product, index) => (
                <div key={index} className="flex flex-col items-center min-w-48 lg:min-w-72 2xl:min-w-96">
                    <div className="relative w-[186px] h-[249px] mb-2 flex-wrap lg:w-[280px] lg:h-[458px] 2xl:h-[480px] 2xl:w-[370px]">
                        {product.images.length > 0 ? (
                            <Image
                                src={product.images[0].url}
                                alt={product.name}
                                layout="fill"
                            />
                        ) : (
                            <p>Imagem não disponível</p>
                        )}
                    </div>
                    <div className="w-full flex items-center justify-between px-2">
                        <h2 className="text-sm truncate w-2/3">{product.name}</h2>
                        <p className="text-sm font-bold truncate w-1/3 text-right">{product.price.formattedValue}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
