import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialProductState = {
  products: [],
  page: 1,
  limit: 15,
  hasMore: true,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProductData: (state, action) => {
      state.products = [...state.products, ...action.payload];
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const fetchProductsData = createAsyncThunk(
  "products/fetchProductsData",
  async (params, { getState, dispatch }) => {
    const { page, limit } = getState().products;
    try {
      dispatch(setLoading(true));
      const response = await axios.get(
        `https://dummyjson.com/products?skip=${
          (page - 1) * limit
        }&limit=${limit}`
      );

      dispatch(setProductData(response.data.products));
      dispatch(setHasMore(response.data.products.length === limit));
      return response.data;
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const {
  setLoading,
  setHasMore,
  setLimit,
  setPage,
  setProductData,
  setError,
} = productsSlice.actions;
export default productsSlice.reducer;
