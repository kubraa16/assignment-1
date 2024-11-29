import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categorySelector,
  errorselector,
  loadingSelector,
} from "../../store/selectors/productCategorySelector";
import { fetchCategoryData } from "../../store/reducers/productCategoriesSlice";
import { GiLipstick } from "react-icons/gi";
import { TbPerfume } from "react-icons/tb";
import { MdCancel, MdOutlineTableRestaurant } from "react-icons/md";
import { FaCarrot } from "react-icons/fa";
import { IoMdColorWand } from "react-icons/io";
import { setInitialProductState } from "../../store/reducers/productSlice";
import { useSearchParams } from "react-router-dom";

const buttonConfig = {
  beauty: { component: <GiLipstick size={20} />, color: "bg-pink-400" },
  fragrances: { component: <TbPerfume size={20} />, color: "bg-teal-400" },
  furniture: {
    component: <MdOutlineTableRestaurant size={20} />,
    color: "bg-amber-400",
  },
  groceries: {
    component: <FaCarrot size={20} />,
    color: "bg-green-400",
  },
  "home-decoration": {
    component: <IoMdColorWand size={20} />,
    color: "bg-purple-400",
  },
};

const CustomTab = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categorySelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorselector);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, []);

  const handleCategorySelect = (categorySlug) => {
    setSearchParams({ category: categorySlug });
    dispatch(setInitialProductState());
  };

  const currentCategory = searchParams.get("category");

  function resetCategory() {
    setSearchParams({});
    dispatch(setInitialProductState());
  }

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="flex flex-row gap-3">
        {categories?.slice(0, 5).map((item, index) => {
          const { component: Icon, color } = buttonConfig[item.slug] || {};
          const isActive = currentCategory === item.slug;
          return (
            <button
              key={index}
              className={`list-none gap-1 items-center p-2 rounded-lg text-l font-semibold cursor-pointer flex flex-row ${color} ${
                isActive ? "bg-blue-500" : ""
              }`}
              onClick={() => handleCategorySelect(item.slug)}
            >
              {Icon}
              {item.slug}
            </button>
          );
        })}
        <button
          className="list-none gap-1 items-center p-2 rounded-lg text-l font-semibold cursor-pointer flex bg-red-400 hover:bg-red-600"
          onClick={resetCategory}
        >
          <MdCancel size={20} />
          Cancel
        </button>
      </div>
    </>
  );
};

export default CustomTab;
