import { FC, useState, useEffect } from "react";
import { Product } from "../../types";
import styled from "@emotion/styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Grid } from "@mui/material";

type ListProductProps = {
  products: Product[];
};

type FilterPrice = { min: number; max: number };

const INFINITE_NUMBER = 999999999;

const categoriesType = [
  { key: "c1", name: "People", value: "people" },
  { key: "c2", name: "Premium", value: "premium" },
  { key: "c3", name: "Pets", value: "pets" },
  { key: "c4", name: "Food", value: "food" },
  { key: "c5", name: "Landmarks", value: "landmarks" },
  { key: "c7", name: "Cities", value: "cities" },
  { key: "c6", name: "Nature", value: "nature" },
];

const filterType = [
  { key: "f1", name: "Lower than $20", value: { min: 0, max: 20 } },
  { key: "f2", name: "$20 - $100", value: { min: 20, max: 100 } },
  { key: "f3", name: "$100 - $200", value: { min: 100, max: 200 } },
  {
    key: "f4",
    name: "More than $200",
    value: { min: 200, max: INFINITE_NUMBER },
  },
];

export const ListProduct: FC<ListProductProps> = ({ products }) => {
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([]);
  const [filterSelected, setFilterSelected] = useState<FilterPrice[]>([]);
  const [filterProduct, setFilterProduct] = useState<Product[]>(products);

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

  // useEffect(() => {
  //   let filteredProducts = products;

  //   if (categoriesSelected.length !== 0) {
  //     console.log("going to filter by category");
  //     const newProducts = filteredProducts.filter((product) => {
  //       return categoriesSelected.includes(product.category);
  //     });
  //     filteredProducts = newProducts;
  //   } else filteredProducts = products;

  //   if (filterSelected.length !== 0) {
  //     console.log("going to filter by price");
  //     // TODO: selecciona el menor y el mayor rango de la lista de objetos de filterSelected
  //     const maxPrice = Math.max(...filterSelected);
  //     console.log(
  //       "🚀 ~ file: ListProduct.tsx ~ line 71 ~ useEffect ~ maxPrice",
  //       maxPrice
  //     );
  //     const newProducts = filteredProducts.filter((product) => {
  //       return product.price <= maxPrice;
  //     });
  //     console.log(
  //       "🚀 ~ file: ListProduct.tsx ~ line 75 ~ newProducts ~ newProducts",
  //       newProducts
  //     );
  //     filteredProducts = newProducts;
  //   }

  //   setFilterProduct(filteredProducts);
  // }, [categoriesSelected, filterSelected]);

  // useEffect(() => {
  //   if (categoriesSelected.length === 0) {
  //     setFilterProduct(products);
  //   } else {
  //     const newProducts = filterProduct.filter((product) => {
  //       return categoriesSelected.includes(product.category);
  //     });
  //     setFilterProduct(newProducts);
  //   }
  // },[categoriesSelected, filterProduct, products]);

  // useEffect(() => {
  //   if (filterSelected.length === 0) {
  //     setFilterProduct(products);
  //   } else {
  //     const maxPrice = Math.max(...filterSelected);
  //     const newProducts = filterProduct.filter((product) => {
  //       return product.price <= maxPrice;
  //     });
  //     setFilterProduct(newProducts);
  //   }
  // },[filterProduct, products, filterSelected]);

  return (
    <Container>
      <TitleContainer>
        <h2>Photography / Premium Photos</h2>
        <h2>
          Sort By: Price <KeyboardArrowDownIcon />
        </h2>
      </TitleContainer>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <FilterTitle>Category</FilterTitle>
          <Filter>
            {categoriesType.map((category, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={category.key}
                  onClick={() => handleCategory(category.value)}
                />{" "}
                <label>{category.name}</label>
              </li>
            ))}
          </Filter>
          <FilterTitle>Price range</FilterTitle>
          <Filter>
            {filterType.map((filter, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={filter.key}
                  onClick={() => handleFilter(filter.value)}
                />{" "}
                <label>{filter.name}</label>
              </li>
            ))}
          </Filter>
        </Grid>
        <Grid container item xs={10}>
          {filterProduct.map((product) => (
            <Grid item xs={3}>
              <ProductCard>
                <Image src={product.image.src} />
                <ButtonContainer>ADD TO CART</ButtonContainer>
                <ProductCategory>
                  {product.category[0].toUpperCase() +
                    product.category.substring(1)}
                </ProductCategory>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{`$ ${product.price}`}</ProductPrice>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 40px;
`;

const Container = styled.div`
  padding-top: 40px;
`;

const ProductCategory = styled.h5`
  margin: 0;
  padding: 5px 0;
`;

const ProductName = styled.h3`
  margin: 0;
  padding: 5px 0;
  font-weight: bold;
  font-size: 25px;
`;

const ProductPrice = styled.h4`
  margin: 0;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 40px;
`;

const Image = styled.img`
  width: 200px;
  height: 250px;
`;

const ButtonContainer = styled.button`
  width: 200px;
  height: 40px;
  left: 1115px;
  top: 182px;
  background: #000000;
  color: #ffffff;
  font-style: normal;
  font-weight: 540;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.07em;
  cursor: pointer;
`;

const Filter = styled.div`
  list-style: none;
  padding-bottom: 25px;
  border-bottom: 4px solid #e4e4e4;
`;

const FilterTitle = styled.h4`
  margin: 0;
  padding-bottom: 30px;
`;
