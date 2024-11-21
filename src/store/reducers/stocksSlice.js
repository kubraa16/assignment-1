import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const safeParse = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.error(`Error parsing ${key}:`, error);
    return [];
  }
};

const API_KEY = import.meta.env.VITE_API_KEY;

const initialStockState = {
  stocksData: [],
  topGainers: safeParse("topGainers"),
  topLosers: safeParse("topLosers"),
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
      localStorage.setItem("topGainers", JSON.stringify(action.payload));
    },
    setTopLosersData: (state, action) => {
      state.topLosers = action.payload;
      localStorage.setItem("topLosers", JSON.stringify(action.payload));
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const fetchStocksData = createAsyncThunk(
  "stocks/fetchStocksData",
  async (params, { dispatch, getState }) => {
    try {
      const state = getState();
      if (
        state.stocks.topGainers.length > 0 &&
        state.stocks.topLosers.length > 0
      ) {
        return {
          topGainers: state.stocks.topGainers,
          topLosers: state.stocks.topLosers,
        };
      }

      // `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`
      const response = await axios.get(
        "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo"
      );

      if (response) {
        dispatch(setTopGainersData(response?.data?.top_gainers || []));
        dispatch(setTopLosersData(response?.data?.top_losers || []));
      }

      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(setError("Error fetching data"));
    }
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
