import { FC, useEffect, useState } from 'react';
import { FeaturedProduct, Header, ListProduct } from '../../components';
import { Product } from '../../types';

type LandingProps = {};

const API_URL = process.env.REACT_APP_API_URL;

export const Landing: FC<LandingProps> = () => {
  const [products, setProducts] = useState<Product[] | undefined>(undefined);

  const getProducts = async () => {
    const res = await fetch(`${API_URL}/products`);
    const data: Product[] = await res.json();

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (!products) return <div>Loading...</div>;

  const getFeaturedProducts = (): Product =>
    products.filter((product) => product.featured)[0];

  const getOtherProducts = (): Product[] =>
    products.filter((product) => !product.featured).slice(0, 3);

  const getNonFeaturedProducts = (): Product[] =>
    products.filter((product) => !product.featured);

  return (
    <>
      <Header />
      <FeaturedProduct
        product={getFeaturedProducts()}
        otherProducts={getOtherProducts()}
      />
      <ListProduct products={getNonFeaturedProducts()} />
    </>
  );
};
