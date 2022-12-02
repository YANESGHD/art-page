import { FC } from 'react';
import { Grid } from '@mui/material';
import { Product } from '../../types';
import styled from '@emotion/styled';
import { OtherItems } from './OtherItems';
import { Description } from './Description';
import { Title } from './Title';

type FeaturedProductProps = {
  product: Product;
  otherProducts: Product[];
};

export const FeaturedProduct: FC<FeaturedProductProps> = ({
  product,
}) => {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Title product={product} />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Description product={product} />
        </Grid>

        <Grid item xs={4}>
          <OtherItems product={product} />
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding: 60px 0;
  border-bottom: 4px solid #e4e4e4;
`;
