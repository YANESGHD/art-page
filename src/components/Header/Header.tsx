import { FC } from "react";
import styled from "@emotion/styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  return (
    <Container>
      <Image src="/images/logo.png" alt="Logo" />
      <ShoppingCartIcon fontSize="large" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 4px solid #E4E4E4;
`;

const Image = styled.img`
  width: 150px;
`
