import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../utils/api";

const initialState = {
    currency:{},
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
}

export const fetchCurrencies = createAsyncThunk(
    'currencies/fetchCurrencies',
    async () => {
      const response = await fetch('https://v6.exchangerate-api.com/v6/6aa0610586124845bd8e7391/latest/USD');
      const data = await response.json();
      return data.conversion_rates; 
    }
  );

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setCurrencies: (state, action) => {
            state.currency = action.payload;
          },
    },
    extraReducers: builder => {
        builder
         .addCase(fetchCurrencies.pending, state => {
            state.status = 'loading'
         })
         .addCase(fetchCurrencies.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.currency = action.payload;
         })
         .addCase(fetchCurrencies.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    }
})

export const { setCurrencies } = currencySlice.actions;
export default currencySlice.reducer;