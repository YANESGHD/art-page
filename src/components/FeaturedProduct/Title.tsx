import { FC } from 'react';
import styled from '@emotion/styled';
import { Product } from '../../types';
import { Button } from '@mui/material';
import { useShoppingCart } from '../../contexts';

type TitleProps = {
  product: Product;
};

export const Title: FC<TitleProps> = ({ product }) => {
  const { handleItemUpdate } = useShoppingCart();

  const handleAddItem = () => {
    handleItemUpdate({
      name: product.name,
      price: product.price,
      quantityRequested: 1,
    });
  };

  return (
    <>
      <Container>
        <Text>{product.name}</Text>
        <StyledButton onClick={() => handleAddItem()}>ADD TO CART</StyledButton>
      </Container>
      <Image src={product.image.src} />
    </>
  )
};

const Text = styled.h1`
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  padding-bottom: 20px;
  background-color: white;
`;

const StyledButton = styled(Button)`
  width: 150px;
  height: 40px;
  background-color: black !important;
  color: white;
  font-size: 16px;
`;
