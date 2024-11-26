import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activeCategorySelector,
  categorySelector,
  errorselector,
  loadingSelector,
} from "../../../store/selectors/productCategorySelector";
import {
  fetchCategoryData,
  setActiveCategory,
} from "../../../store/reducers/productCategoriesSlice";

const CustomTab = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(activeCategorySelector);
  const categories = useSelector(categorySelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorselector);

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, []);

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="flex flex-row gap-3">
        {categories?.slice(0, 5).map((item, index) => (
          <li
            className={`list-none p-2 rounded-lg  text-l font-semibold cursor-pointer ${
              item.slug === activeCategory
                ? "bg-blue-700 text-white shadow-md"
                : "bg-transparent"
            }`}
            key={index}
            onClick={() => dispatch(setActiveCategory(item.slug))}
          >
            {item.slug}
          </li>
        ))}
      </div>
    </>
  );
};

export default CustomTab;
