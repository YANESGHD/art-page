import { FC, useState } from 'react';
import styled from '@emotion/styled';
import { Product } from '../../types';

type FilterPrice = { min: number; max: number };

const INFINITE_NUMBER = 999999999;

const categoriesType = [
  { key: 'c1', name: 'People', value: 'people' },
  { key: 'c2', name: 'Premium', value: 'premium' },
  { key: 'c3', name: 'Pets', value: 'pets' },
  { key: 'c4', name: 'Food', value: 'food' },
  { key: 'c5', name: 'Landmarks', value: 'landmarks' },
  { key: 'c7', name: 'Cities', value: 'cities' },
  { key: 'c6', name: 'Nature', value: 'nature' },
];

const filterType = [
  { key: 'f1', name: 'Lower than $20', value: { min: 0, max: 20 } },
  { key: 'f2', name: '$20 - $100', value: { min: 20, max: 100 } },
  { key: 'f3', name: '$100 - $200', value: { min: 100, max: 200 } },
  {
    key: 'f4',
    name: 'More than $200',
    value: { min: 200, max: INFINITE_NUMBER },
  },
];

type FiltersProps = {
  products: Product[];
};

export const Filters: FC<FiltersProps> = ({ products }) => {
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([]);
  const [filterSelected, setFilterSelected] = useState<FilterPrice[]>([]);

  const handleCategory = (value: string) => {
    if (categoriesSelected.includes(value)) {
      setCategoriesSelected(categoriesSelected.filter((v) => v !== value));
    } else {
      setCategoriesSelected([...categoriesSelected, value]);
    }
  };

  const handleFilter = (value: FilterPrice) => {
    if (filterSelected.includes(value)) {
      setFilterSelected(filterSelected.filter((v) => v !== value));
    } else {
      setFilterSelected([...filterSelected, value]);
    }
  };

  return (
    <>
      <FilterTitle>Category</FilterTitle>
      <Filter>
        {categoriesType.map((category, index) => (
          <li key={index}>
            <input
              type='checkbox'
              id={category.key}
              onClick={() => handleCategory(category.value)}
            />{' '}
            <label>{category.name}</label>
          </li>
        ))}
      </Filter>

      <FilterTitle>Price range</FilterTitle>
      <Filter>
        {filterType.map((filter, index) => (
          <li key={index}>
            <input
              type='checkbox'
              id={filter.key}
              onClick={() => handleFilter(filter.value)}
            />{' '}
            <label>{filter.name}</label>
          </li>
        ))}
      </Filter>
    </>
  )
};


const Filter = styled.div`
  list-style: none;
  padding-bottom: 25px;
  margin-bottom: 20px;
  border-bottom: 4px solid #e4e4e4;
`;

const FilterTitle = styled.h4`
  margin: 0;
  padding-bottom: 30px;
`;
