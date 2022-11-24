import React from "react";
import styled from "styled-components";
import Sort from "./Components/Sort";
import ProductList from "./Components/ProductList";
import FilterProducts from "./Components/FilterProducts";

function Products() {
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterProducts />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  @media (max-width: 756px) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;
export default Products;
