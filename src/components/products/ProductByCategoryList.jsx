import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  errorSelector,
  loadingSelector,
  productBycategorySelector,
} from "../../store/selectors/productByCategorySelector";
import { fetchCategoryProducts } from "../../store/reducers/productByCategorySlice";
import { useSearchParams } from "react-router-dom";
import { setActiveCategory } from "../../store/reducers/productCategoriesSlice";
import CustomTable from "../core/CustomTable";

const ProductByCategoryList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  const dispatch = useDispatch();
  const products = useSelector(productBycategorySelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (category) {
      dispatch(setActiveCategory(category));
      dispatch(fetchCategoryProducts(category));
    }
  }, [category, dispatch]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {products?.length > 0 ? (
        <CustomTable data={products} isProducts={true} />
      ) : (
        <div>No products found.</div>
      )}
    </>
  );
};

export default ProductByCategoryList;
