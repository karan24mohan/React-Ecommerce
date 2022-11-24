import React from "react";
import { useFilterContext } from "./../FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_Products, grid_view } = useFilterContext();

  if (grid_view === true) {
    return <GridView products={filter_Products} />;
  }

  if (grid_view === false) {
    return <ListView products={filter_Products} />;
  }
};

export default ProductList;
