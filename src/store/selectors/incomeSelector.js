import { createSelector } from "@reduxjs/toolkit";

export const incomeStore = (store) => store.incomeDetails;

export const incomeSelector = createSelector(
  incomeStore,
  (income) => income.incomeData
);

export const loadingSelector = createSelector(
  incomeStore,
  (income) => income.loading
);

export const errorSelector = createSelector(
  incomeStore,
  (income) => income.error
);
