import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = import.meta.VITE_API_KEY;

const initialIncomeState = {
  incomeData: {},
  loading: false,
  error: null,
};

const incomeSlice = createSlice({
  name: "incomeDetails",
  initialState: initialIncomeState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setIncomeData: (state, action) => {
      const { ticker, data } = action.payload;
      state.incomeData[ticker] = data;
      localStorage.setItem("income", JSON.stringify(state.incomeData));
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const fetchIncomeData = createAsyncThunk(
  "incomeDetails/fetchIncomeData",
  async (ticker, { dispatch, getState }) => {
    const state = getState();

    if (state.incomeDetails.incomeData[ticker]) {
      return { ticker, data: state.incomeDetails.incomeData[ticker] };
    }

    try {
      dispatch(setLoading());
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${ticker}&apikey=${API_KEY}`
      );
      dispatch(setIncomeData({ ticker, data: response.data }));
      return { ticker, data: response.data };
    } catch (err) {
      dispatch(setError(err.message));
      throw err;
    }
  }
);

export const { setLoading, setIncomeData, setError } = incomeSlice.actions;
export default incomeSlice.reducer;
