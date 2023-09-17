import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const URL = `http://localhost:3007/shopProducts`
const URL = `https://shop-product-tj9k.onrender.com/shopProducts`
const initialState ={
    products: [],
    isLoading:false,
    isError: false
}
export const getData = createAsyncThunk(
    "product/getData",
    async (args, thunkAPI) => {
        const {rejectWithValue} =thunkAPI
        try {
            const response = await axios.get(URL)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{},
    extraReducers:{
        [getData.pending]: (state) => {
            state.isLoading = true
        },
        [getData.fulfilled]: (state, action) => {
            state.isLoading = false
            state.products = action.payload;
        },
        [getData.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;