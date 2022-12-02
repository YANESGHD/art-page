import { FC } from 'react';
import styled from '@emotion/styled';
import { Product } from '../../types';

type DescriptionProps = {
  product: Product;
};

export const Description: FC<DescriptionProps> = ({ product }) => {
  return (
    <>
      <SubTitle>About the {product.name}</SubTitle>
      <CategoryTitle>
        {product.category[0].toUpperCase() + product.category.substring(1)}
      </CategoryTitle>
      <>{product.details.description}</>
    </>
  )
};

const SubTitle = styled.h2`
  font-weight: bold;
  font-size: 22px;
  line-height: 24px;
  padding-bottom: 10px;
`;

const CategoryTitle = styled.h3`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #656565;
`;
