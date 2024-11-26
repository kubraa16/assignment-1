import React from "react";
import CustomTab from "./CustomTab";
import ProductsList from "./ProductsList";
import { useSelector } from "react-redux";
import { activeCategorySelector } from "../../../store/selectors/productCategorySelector";

const Products = ({ children }) => {
  return (
    <>
      <CustomTab />
      <div className="container mt-16">{children}</div>
    </>
  );
};

export default Products;
