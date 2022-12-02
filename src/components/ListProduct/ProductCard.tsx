import { FC } from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Product } from '../../types';
import { useShoppingCart } from '../../contexts';

type ProductCardProps = {
  product: Product;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { handleItemUpdate } = useShoppingCart();

  const handleAddItem = () => {
    handleItemUpdate({
      name: product.name,
      price: product.price,
      quantityRequested: 1,
    });
  }

  return (
    <Container>
      <Image src={product.image.src} />
      <StyledButton onClick={handleAddItem}>ADD TO CART</StyledButton>
      <ProductCategory>
        {product.category[0].toUpperCase() +
          product.category.substring(1)}
      </ProductCategory>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{`$ ${product.price}`}</ProductPrice>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 40px;
`;

const ProductCategory = styled.h5`
  margin: 0;
  padding: 5px 0;
`;

const ProductName = styled.h3`
  margin: 0;
  padding: 5px 0;
  font-weight: bold;
  font-size: 25px;
`;

const ProductPrice = styled.h4`
  margin: 0;
`;

const Image = styled.img`
  width: 200px;
  height: 250px;
`;

const StyledButton = styled(Button)`
  width: 200px;
  height: 40px;
  background-color: black !important;
  color: white;
  font-size: 16px;
  border-radius: 0;
`;
