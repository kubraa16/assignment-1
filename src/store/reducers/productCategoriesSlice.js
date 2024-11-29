import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialCategoryState = {
  categories: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "category",
  initialState: initialCategoryState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = true;
    },
    setCategoryData: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const fetchCategoryData = createAsyncThunk(
  "categories/fetchCategoryData",
  async (params, { dispatch }) => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      dispatch(setCategoryData(response.data));
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const { setLoading, setCategoryData, setError } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
