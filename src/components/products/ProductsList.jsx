import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hasMoreSelector,
  limitSelector,
  loadingSelector,
  pageSelector,
  productSelector,
} from "../../store/selectors/productSelector";
import {
  fetchProductsData,
  setPage,
  fetchCategoryProducts,
} from "../../store/reducers/productSlice";
import CustomTable from "../core/CustomTable";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const products = useSelector(productSelector);
  const page = useSelector(pageSelector);
  const limit = useSelector(limitSelector);
  const hasMore = useSelector(hasMoreSelector);
  const loading = useSelector(loadingSelector);

  const category = searchParams.get("category");
  const observer = useRef(null);
  const lastElementRef = useRef();

  useEffect(() => {
    if (!category)
      dispatch(fetchProductsData({ page, limit, skip: (page - 1) * limit }));
  }, [category, page, hasMore]);

  useEffect(() => {
    if (category) {
      dispatch(fetchCategoryProducts(category));
    }
  }, [category]);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasMore && !loading) {
          dispatch(setPage(page + 1));
        }
      },
      { threshold: 1.0 }
    );

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [hasMore, loading, page]);

  return (
    <div className="p-3 h-1/3 overflow-auto">
      {products.length > 0 ? (
        <CustomTable data={products} isProducts={true} />
      ) : (
        <div>No products found.</div>
      )}
      {hasMore && (
        <div
          ref={lastElementRef}
          style={{ height: "20px", backgroundColor: "transparent" }}
        >
          Loading more...
        </div>
      )}
    </div>
  );
};

export default ProductsList;
