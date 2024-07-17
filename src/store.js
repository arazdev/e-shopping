import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreatSlice';

const store = configureStore({
    reducer: {
        cartR: cartReducer
    },
});
export default store