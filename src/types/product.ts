interface Image {
  url: string;
}
export interface Product {
  images: Image[];
  name: string;
  price: {
    formattedValue: string;
  };
}