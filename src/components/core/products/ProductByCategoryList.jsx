import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  errorSelector,
  loadingSelector,
  productBycategorySelector,
} from "../../../store/selectors/productByCategorySelector";
import { fetchCategoryProducts } from "../../../store/reducers/productByCategorySlice";
import { activeCategorySelector } from "../../../store/selectors/productCategorySelector";

const ProductByCategoryList = () => {
  const dispatch = useDispatch();
  const products = useSelector(productBycategorySelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const selectedCategory = useSelector(activeCategorySelector);

  useEffect(() => {
    dispatch(fetchCategoryProducts(selectedCategory));
  }, []);

  console.log(products);
  return <div>ProductByCategoryList</div>;
};

export default ProductByCategoryList;
