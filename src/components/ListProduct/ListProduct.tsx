import { FC } from "react";
import { Product } from "../../types";
import styled from "@emotion/styled";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Grid } from "@mui/material";

type ListProductProps = {
  productsList: Product[];
};

export const ListProduct: FC<ListProductProps> = ({ productsList }) => {
  return (
    <>
      <Grid item xs={12}>
        <Container>
          <h2>Photography</h2>
          <h2>Sort By: Price <KeyboardArrowDownIcon /></h2>
        </Container>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <h4>Category</h4>
          <Filter>
            <li><CheckBoxOutlineBlankIcon /> People</li>
            <li><CheckBoxOutlineBlankIcon /> Premium</li>
            <li><CheckBoxOutlineBlankIcon /> Pets</li>
            <li><CheckBoxOutlineBlankIcon /> Food</li>
            <li><CheckBoxOutlineBlankIcon /> Landmarks</li>
            <li><CheckBoxOutlineBlankIcon /> Cities</li>
            <li><CheckBoxOutlineBlankIcon /> Nature</li>
          </Filter>
          <h4>Price range</h4>
          <Filter>
            <li><CheckBoxOutlineBlankIcon /> Lower than $20</li>
            <li><CheckBoxOutlineBlankIcon /> $20 - $100</li>
            <li><CheckBoxOutlineBlankIcon /> $100 - $200</li>
            <li><CheckBoxOutlineBlankIcon /> More than $200</li>
          </Filter>
        </Grid>
        <Grid item xs={10}>
          <RowPosters>
            {productsList.map((product) => (
              <ProductContainer>
                <Image src={product.image.src} />
                <ButtonContainer>ADD TO CART</ButtonContainer>
                <h5>{product.category[0].toUpperCase() + product.category.substring(1)}</h5>
                <h3>{product.name}</h3>
                <h4>{`$ ${product.price}`}</h4>
              </ProductContainer>
            ))}
          </RowPosters>
        </Grid>
      </Grid>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 150px;
  margin-right: 10px;
  transition: transform 450ms;
`;

const RowPosters = styled.div`
  display: flex;
`;

const ButtonContainer = styled.button`
  width: 200px;
  height: 40px;
  left: 1115px;
  top: 182px;
  background: #000000;
  color: #FFFFFF;
  font-style: normal;
  font-weight: 540;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.07em;
`;

const ProductContainer = styled.div`
  display: block;
  line-height: 0.3;
`;

const Filter = styled.div`
  list-style: none;
  padding-bottom: 25px;
  border-bottom: 4px solid #E4E4E4;
`
