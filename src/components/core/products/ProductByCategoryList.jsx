import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  errorSelector,
  loadingSelector,
  productBycategorySelector,
} from "../../../store/selectors/productByCategorySelector";
import { fetchCategoryProducts } from "../../../store/reducers/productByCategorySlice";
import { activeCategorySelector } from "../../../store/selectors/productCategorySelector";
import StocksTable from "../table/StockTable";
import { useParams } from "react-router-dom";

const ProductByCategoryList = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(productBycategorySelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const selectedCategory = useSelector(activeCategorySelector);

  useEffect(() => {
    dispatch(fetchCategoryProducts(selectedCategory));
  }, [selectedCategory]);

  return (
    <>
      {products.length > 0 ? (
        <StocksTable data={products} isProducts={true} />
      ) : (
        <div>No products found.</div>
      )}
    </>
  );
};

export default ProductByCategoryList;
