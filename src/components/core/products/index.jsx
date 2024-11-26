import React from "react";
import CustomTab from "./CustomTab";
import ProductsList from "./ProductsList";
import { useSelector } from "react-redux";
import { activeCategorySelector } from "../../../store/selectors/productCategorySelector";
import ProductByCategoryList from "./ProductByCategoryList";

const Products = () => {
  const selectedCategory = useSelector(activeCategorySelector);
  return (
    <>
      <CustomTab />
      {!selectedCategory ? <ProductsList /> : <ProductByCategoryList />}
    </>
  );
};

export default Products;
