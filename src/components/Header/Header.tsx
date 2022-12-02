import { FC, useState } from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { Menu, IconButton } from '@mui/material';
import styled from '@emotion/styled';
import { ShoppingCartItems } from './ShoppingCartItems';

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpenMenu(event.currentTarget);
  };

  return (
    <Container>
      <Title>{"<YANESGAB />"}</Title>

      <IconButton onClick={handleClick}>
        <ShoppingCart sx={{ fontSize: 40, color: 'black' }}/>
      </IconButton>

      <Menu
        id='user-menu'
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
  border-bottom: 4px solid #E4E4E4;
`;
