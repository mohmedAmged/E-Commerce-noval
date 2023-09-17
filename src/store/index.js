import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/singlePageData";
import { cartReducer } from "./slices/cartSlice";
import { favReducer } from "./slices/favSlice";
export const myStore = configureStore({
    reducer: {
        productReducer,
        cartReducer,
        favReducer
    },
});