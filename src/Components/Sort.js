import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../FilterContext";

const Sort = () => {
  const {
    filter_Products,
    grid_view,
    setGridView,
    setListView,
    setSorting,
  } = useFilterContext();
  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={grid_view ? " active sort-btn" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={grid_view ? " sort-btn" : "active sort-btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-data">{`${filter_Products.length} Available`}</div>
      <div className="sort-selection">
        <label htmlFor="sort">
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={setSorting}
          >
            <option value="lowest">Price Lowest</option>
            <option value="#" disabled></option>
            <option value="highest">Price Highest</option>
            <option value="#" disabled></option>
            <option value="a-z">Price (A-Z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price (Z-A)</option>
          </select>
        </label>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: #000;
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;
export default Sort;
