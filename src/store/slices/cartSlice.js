import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

const items = localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')) : []
const totalPrice = localStorage.getItem('totalPrice') !== null ? JSON.parse(localStorage.getItem('totalPrice')) : 0
const totalItems = localStorage.getItem('totalItems') !== null ? JSON.parse(localStorage.getItem('totalItems')) : 0
const initialState = {
    cart: items,
    totalPrice: totalPrice,
    totalItems: totalItems,
    totalPriceAndShip: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const obj = state.cart.find((item) => item.id === action.payload.id);
            if (obj) {
                obj.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state.cart.map(item=>item)))
            localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
            localStorage.setItem('totalItems', JSON.stringify(state.totalItems))
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart.map(item=>item)))
            localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
            localStorage.setItem('totalItems', JSON.stringify(state.totalItems))
        },
        increaseQuantity: (state, action) => {
            const obj = state.cart.find((item) => item.id === action.payload);
            obj.quantity++;
            localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
            localStorage.setItem('totalItems', JSON.stringify(state.totalItems))
        },
        decreaseQuantity: (state, action) => {
            const obj = state.cart.find((item) => item.id === action.payload);
            if (obj.quantity > 1) obj.quantity--;
            localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
            localStorage.setItem('totalItems', JSON.stringify(state.totalItems))
        },
        calcTotal: (state) => {
            state.totalPrice = state.cart?.reduce(
                (acc, item) => acc + item.quantity * item.price, 0
            );
            state.totalItems = state.cart?.reduce(
                (acc, item) => acc + item.quantity, 0
            );
            state.totalPriceAndShip = state.cart?.reduce(
                (acc, item) => acc + item.quantity * item.price + 50, 0
            );
            localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
            localStorage.setItem('totalItems', JSON.stringify(state.totalItems))
        },
        
    },
});
export const {
    addItem,
    removeItem,
    removeAll,
    increaseQuantity,
    decreaseQuantity,
    calcTotal
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
