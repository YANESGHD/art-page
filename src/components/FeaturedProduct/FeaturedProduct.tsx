import { FC } from "react";
import { Product } from "../../types";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";

type FeaturedProductProps = {
  productFeature: Product;
};

export const FeaturedProduct: FC<FeaturedProductProps> = ({
  productFeature,
}) => {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Container2>
            <h1>{productFeature.name}</h1>
            <ButtonContainer>
              ADD TO CART
            </ButtonContainer>
          </Container2>
          <Image src={productFeature.image.src} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h2>About the {productFeature.name}</h2>
          <h3>{productFeature.category[0].toUpperCase() + productFeature.category.substring(1)}</h3>
          <div>{productFeature.details.description}</div>
        </Grid>
        <Grid item xs={4}>
          
            <h2>People also buy</h2>
            <h2>Details</h2>
          <div>Size:</div>
          <div>Size:</div>
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 20px;
  border-bottom: 4px solid #E4E4E4;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  left: 82px;
  top: 256px;
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
