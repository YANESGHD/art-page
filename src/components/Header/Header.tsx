import { FC, useEffect, useState } from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { Menu, IconButton } from '@mui/material';
import styled from '@emotion/styled';
import { ShoppingCartItems } from './ShoppingCartItems';
import { useShoppingCart } from '../../contexts';

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);
  const [itemsQuantity, setItemsQuantity] = useState(0);

  const { cartItems } = useShoppingCart();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpenMenu(event.currentTarget);
  };

  useEffect(() => {
    setItemsQuantity(Object.values(cartItems)?.reduce(
      (accum, curr) => (accum += curr.quantityRequested),
      0
    ));
  }, [cartItems]);

  return (
    <Container>
      <Title>{'<YANESGAB />'}</Title>

      <IconButton onClick={handleClick}>
        <ShoppingCart sx={{ fontSize: 40, color: 'black' }} />
        <Text>{itemsQuantity}</Text>
      </IconButton>

      <Menu
        id="user-menu"
        anchorEl={openMenu}
        open={!!openMenu}
        onClose={() => setOpenMenu(null)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <ShoppingCartItems />
      </Menu>
    </Container>
  );
};

const Title = styled.h2`
  font-size: 24px;
  letter-spacing: 0.2em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 4px solid #e4e4e4;
`;

const Text = styled.h2`
  font-size: 26px;
  color: black;
`;
