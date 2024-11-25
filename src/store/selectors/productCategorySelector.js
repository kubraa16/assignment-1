import { createSelector } from "@reduxjs/toolkit";

export const categoryStore = (store) => store.category;

export const categorySelector = createSelector(
  categoryStore,
  (state) => state.categories
);

// export const activeCategorySelector = (state) => {
//   console.log("State in activeCategorySelector:", state);
//   return state.activeCategory ? state.activeCategory : null;
// };

export const activeCategorySelector = createSelector(
  categoryStore,
  (state) => state.activeCategory
);

export const loadingSelector = createSelector(
  categoryStore,
  (state) => state.loading
);

export const errorselector = createSelector(
  categoryStore,
  (state) => state.error
);
