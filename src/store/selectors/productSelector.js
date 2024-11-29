import { createSelector } from "@reduxjs/toolkit";

export const productStore = (store) => store.products;

export const productSelector = createSelector(
  productStore,
  (state) => state.products
);

export const categorySelector = createSelector(
  productStore,
  (state) => state.category
);

export const pageSelector = createSelector(productStore, (state) => state.page);

export const limitSelector = createSelector(
  productStore,
  (state) => state.limit
);

export const hasMoreSelector = createSelector(
  productStore,
  (state) => state.hasMore
);

export const loadingSelector = createSelector(
  productStore,
  (state) => state.loading
);

export const errorselector = createSelector(
  productStore,
  (state) => state.error
);
