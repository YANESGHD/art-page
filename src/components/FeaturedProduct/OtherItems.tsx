import { FC } from 'react';
import styled from '@emotion/styled';
import { Product } from '../../types';

type OtherItemsProps = {
  product: Product;
};

export const OtherItems: FC<OtherItemsProps> = ({ product }) => {
  return (
    <Container>
      <h2>People also buy</h2>
      <h2>Details</h2>
      <div>
        Size: {product.details.dimensions.width} x{' '}
        {product.details.dimensions.height} pixel
      </div>
      <div>Size: {product.details.size / 1000} mb</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
