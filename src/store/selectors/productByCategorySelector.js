import { createSelector } from "@reduxjs/toolkit";

export const productByCategoryStore = (store) => store.categoryProduct;

export const productBycategorySelector = createSelector(
  productByCategoryStore,
  (state) => state.categoryProducts
);

export const loadingSelector = createSelector(
  productByCategoryStore,
  (state) => state.loading
);

export const errorSelector = createSelector(
  productByCategoryStore,
  (state) => state.error
);
