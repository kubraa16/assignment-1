import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import stocksReducer from "./reducers/stocksSlice";
import companyDetailsReducer from "./reducers/compDetailsSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["topGainers", "topLosers"],
};

const persistCompanyDetailsConfig = {
  key: "companyDetails",
  storage,
  whiteList: ["companyData"],
};

const persistedReducer = persistReducer(persistConfig, stocksReducer);
const persistedCompanyDetailsReducer = persistReducer(
  persistCompanyDetailsConfig,
  companyDetailsReducer
);
export const store = configureStore({
  reducer: {
    stocks: persistedReducer,
    compDetails: persistedCompanyDetailsReducer,
  },
});

export const persistor = persistStore(store);

export default store;
