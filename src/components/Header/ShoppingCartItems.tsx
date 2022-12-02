import { FC } from 'react';
import styled from '@emotion/styled';
import { MenuItem } from '@mui/material';
import { useShoppingCart } from '../../contexts/useShoppingCart';

export const ShoppingCartItems: FC = () => { 
  const { cartItems } = useShoppingCart();

  return (
    <Container>
      {Object.entries(cartItems)?.map(([name, value]) => (
        <StyledMenuItem>
          <Text>Item: {name}</Text>
          <Text>Cantidad: {value.quantityRequested}</Text>
        </StyledMenuItem>
      ))}
      {Object.entries(cartItems).length === 0 && (
        <StyledMenuItem>
          <Text>El carrito de compras está vacío</Text>
        </StyledMenuItem>
      )}
    </Container>
  );
};

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  padding-left: 5px;
`;

const Container = styled.div`
  min-width: 200px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;