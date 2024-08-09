import { configureStore } from '@reduxjs/toolkit';
import reducer from '../currencySlice/currencySlice';

const store = configureStore({
    reducer
})

export default store;