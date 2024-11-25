import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import stocksReducer from "./reducers/stocksSlice";
import companyDetailsReducer from "./reducers/compDetailsSlice";
import incomeReducer from "./reducers/compIncomeSlice";
import categoryReducer from "./reducers/productCategoriesSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["topGainers", "topLosers"],
};

const persistCompanyDetailsConfig = {
  key: "companyDetails",
  storage,
  whiteList: ["companies"],
};

const persistIncomeConfig = {
  key: "incomeDetails",
  storage,
  whiteList: ["incomeData"],
};

const persistedReducer = persistReducer(persistConfig, stocksReducer);
const persistedCompanyDetailsReducer = persistReducer(
  persistCompanyDetailsConfig,
  companyDetailsReducer
);
const persistIncomeReducer = persistReducer(persistIncomeConfig, incomeReducer);

export const store = configureStore({
  reducer: {
    stocks: persistedReducer,
    compDetails: persistedCompanyDetailsReducer,
    incomeDetails: persistIncomeReducer,
    category: categoryReducer, // Persistent data storage is not required for this API
  },
});

export const persistor = persistStore(store);

export default store;
