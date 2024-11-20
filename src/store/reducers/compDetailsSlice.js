import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = import.meta.VITE_API_KEY;

const initialCompDetailsState = {
  companyData: localStorage.getItem("companyDetails") || "[]",
  loading: false,
  error: null,
};
