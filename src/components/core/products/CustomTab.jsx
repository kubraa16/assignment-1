import React, { Component, useEffect, useState } from "react";
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
import { GiCancel, GiLipstick } from "react-icons/gi";
import { TbEyeCancel, TbFlagCancel, TbPerfume } from "react-icons/tb";
import { MdCancel, MdOutlineTableRestaurant } from "react-icons/md";
import { FaCarrot } from "react-icons/fa";
import { IoMdColorWand } from "react-icons/io";
import { Link, Navigate, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const activeCategory = useSelector(activeCategorySelector);
  const categories = useSelector(categorySelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorselector);

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, []);

  function resetCategory() {
    dispatch(setActiveCategory(null));
    navigate("/");
  }

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="flex flex-row gap-3">
        {categories?.slice(0, 5).map((item, index) => {
          const { component: Icon, color } = buttonConfig[item.slug] || {};

          return (
            <button
              className={`list-none gap-1 items-center p-2 rounded-lg text-l font-semibold cursor-pointer flex ${color}`}
              key={index}
              onClick={() => dispatch(setActiveCategory(item.slug))}
            >
              {" "}
              <Link to={`/products/${item.slug}`}>
                {Icon}
                {item.slug}
              </Link>
            </button>
          );
        })}
        <button
          className="list-none gap-1 items-center p-2 rounded-lg text-l font-semibold cursor-pointer flex bg-red-400 hover:bg-red-600"
          onClick={() => resetCategory()}
        >
          <MdCancel size={20} />
          Cancel
        </button>
      </div>
    </>
  );
};

export default CustomTab;
