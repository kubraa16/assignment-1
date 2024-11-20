import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY);

const initialStockState = {
  stocksData: [],
  topGainers: [],
  topLosers: [],
  loading: false,
  error: null,
};

const stocksSlice = createSlice({
  name: "stocks",
  initialState: initialStockState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setStocksData: (state, action) => {
      state.stocksData = action.payload;
    },
    setTopGainersData: (state, action) => {
      state.topGainers = action.payload;
    },
    setTopLosersData: (state, action) => {
      state.topLosers = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const fetchStocksData = createAsyncThunk(
  "stocks/fetchStocksData",
  async (params, { dispatch }) => {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`
    );

    if (response) {
      dispatch(setTopGainersData(response?.data?.top_gainers));
    }

    return response.data;
  }
);

export const {
  setStocksData,
  setLoading,
  setError,
  setTopGainersData,
  setTopLosersData,
} = stocksSlice.actions;

export default stocksSlice.reducer;
