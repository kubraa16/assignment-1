import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import stocksReducer from "./reducers/stocksSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["topGainers", "topLosers"],
};

const persistedReducer = persistReducer(persistConfig, stocksReducer);

export const store = configureStore({
  reducer: {
    stocks: persistedReducer,
  },
});

export const persistor = persistStore(store);

export default store;
