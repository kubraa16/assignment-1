import { createSelector } from "@reduxjs/toolkit";

export const categoryStore = (store) => store.category;

export const categorySelector = createSelector(
  categoryStore,
  (state) => state.categories
);

export const loadingSelector = createSelector(
  categoryStore,
  (state) => state.loading
);

export const errorselector = createSelector(
  categoryStore,
  (state) => state.error
);
