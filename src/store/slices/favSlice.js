import { createSlice } from "@reduxjs/toolkit";
const favItems = localStorage.getItem('wishlist') !== null ? JSON.parse(localStorage.getItem('wishlist')) : []
const initialState = {
    wishlist: favItems,
};
const favSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addFavItem: (state, action) => {
            const objFav = state.wishlist?.find((item) => item.id === action.payload.id);
            if (objFav) {
                objFav.quantityFav++
            } else {
                state.wishlist?.push({ ...action.payload, quantityFav: 1 })
            }
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist.map(item => item)))
        },
        removefavItem: (state, action) => {
            state.wishlist = state.wishlist?.filter((item) => item.id !== action.payload)
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist.map(item => item)))
        },
    },
});
export const {
    addFavItem,
    removefavItem
} = favSlice.actions;
export const favReducer = favSlice.reducer