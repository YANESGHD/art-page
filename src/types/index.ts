interface Image {
  src: string;
  alt: string;
}

 interface Dimensions {
  width: number;
  height: number;
}

 interface Recommendation {
  src: string;
  alt: string;
}

 interface Details {
  dimensions: Dimensions;
  size: number;
  description: string;
  recommendations: Recommendation[];
}

export interface Product {
  name: string;
  category: string;
  price: number;
  currency: string;
  image: Image;
  bestseller: boolean;
  featured: boolean;
  details: Details;
}
