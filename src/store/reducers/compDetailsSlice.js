import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.VITE_API_KEY;

const initialCompDetailsState = {
  companyData: JSON.parse(localStorage.getItem("companies")) || {},
  loading: false,
  error: null,
};

const compDetailsSlice = createSlice({
  name: "compDetails",
  initialState: initialCompDetailsState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = true;
    },
    setCompanyData: (state, action) => {
      const { ticker, data } = action.payload;
      state.companies[ticker] = data;
      localStorage.setItem("companies", JSON.stringify(state.companies));
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const fetchCompanyData = createAsyncThunk(
  "compDetails/fetchCompDeatils",
  async (ticker, { dispatch, getState }) => {
    const state = getState();
    if (state.compDetails.companies[ticker]) {
      return { ticker, data: state.compDetails.companies[ticker] };
    }
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${API_KEY}`
      );

      dispatch(setCompanyData({ ticker, data: response.data }));
      return { ticker, data: response.data };
    } catch (err) {
      dispatch(setError(err.message));
    }
  }
);

export const { setLoading, setCompanyData, setError } =
  compDetailsSlice.actions;
export default compDetailsSlice.reducer;
