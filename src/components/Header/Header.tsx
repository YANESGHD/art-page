import { FC } from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import styled from '@emotion/styled';

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  return (
    <Container>
      <Title>{"<YANESGAB />"}</Title>

      <IconButton>
        <ShoppingCart sx={{ fontSize: 40, color: 'black' }}/>
      </IconButton>
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
