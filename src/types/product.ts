interface Image {
  url: string;
}

interface Categories {
  code: string;
}

export interface Product {
  images: Image[];
  name: string;
  price: {
    formattedValue: string;
  };
  categories?: Categories[];
  code: string;
  description?: string;
  color?: string;
}
