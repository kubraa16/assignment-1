import { createSelector } from "@reduxjs/toolkit";

export const stockStore = (store) => store.stocks;

export const gainersSelector = createSelector(
  stockStore,
  (stocks) => stocks.topGainers
);

export const losersSelecter = createSelector(
  stockStore,
  (stocks) => stocks.topLosers
);

export const loadingSelector = createSelector(
  stockStore,
  (stocks) => stocks.loading
);

export const errorSelector = createSelector(
  stockStore,
  (stocks) => stocks.error
);
