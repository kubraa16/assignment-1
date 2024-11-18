import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
// const API_KEY = "L9AL5T7WX8QRVA87"
const API_KEY = "YZO2U8T15VJ6PYWK"
export const fetchStocksData = createAsyncThunk('stocks/fetchTopgainers', async () => {
    const response = await axios.get(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`);
    console.log(response.data);
    return response.data;
})

const stocksSlice = createSlice({
    name: "stocks",
    initialState: {
        stocksData : [],
        loading: false,
        error: null,      
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchStocksData.pending, (state)=> {
            state.loading = true;
        })
        .addCase(fetchStocksData.fulfilled, (state , action) => {
            state.loading = false;
            state.stocksData = action.payload;
        })
        .addCase(fetchStocksData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default stocksSlice.reducer;