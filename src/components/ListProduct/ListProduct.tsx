import { FC } from 'react';
import { Product } from '../../types';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { Title} from './Title';
import { ProductCard } from './ProductCard';

type ListProductProps = {
  products: Product[];
};

export const ListProduct: FC<ListProductProps> = ({ products }) => {
  return (
    <Container>
      <Title />
      
      <Grid container spacing={1}>
        {/* TODO: Add filters */}
        {/* <Grid item xs={2}>
          <Filters products={products} />
        </Grid> */}

        <Grid container item xs={12}>
          {products.map((product) => (
            <Grid item xs={3}>
              <ProductCard key={product.name} product={product} />   
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 40px;
`;
