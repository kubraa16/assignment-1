import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categoryProducts: [],
  loading: false,
  error: null,
};

const categoryProductsSlice = createSlice({
  name: "categoryProduct",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = true;
    },
    setCategoryProductsData: (state, action) => {
      state.loading = false;
      state.categoryProducts = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const fetchCategoryProducts = createAsyncThunk(
  "categoryProduct/fetchCategoryProducts",
  async (category, { dispatch }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );

      dispatch(setCategoryProductsData(response.data));
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const { setLoading, setCategoryProductsData, setError } =
  categoryProductsSlice.actions;

export default categoryProductsSlice.reducer;
