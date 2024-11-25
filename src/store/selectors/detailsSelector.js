import { createSelector } from "@reduxjs/toolkit";

export const detailStore = (store) => store.compDetails;

export const detailsSelector = createSelector(
  detailStore,
  (details) => details.companies
);

export const loadingSelector = createSelector(
  detailStore,
  (details) => details.loading
);

export const errorSelector = createSelector(
  detailStore,
  (details) => details.error
);
