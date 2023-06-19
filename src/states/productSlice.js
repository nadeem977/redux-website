import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    data:[]
};
const producSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts(state ,action){
        state.data =action.payload
        }
    }
});

export const {fetchProducts} = producSlice.actions;
export default producSlice.reducer;

export function gatProducts(){
    return async function gatProductsThunk(dispatch ,getState){
        const respons = await fetch('https://fakestoreapi.com/products')
        try {
            const result = await respons.json();
            dispatch(fetchProducts(result))
            
        } catch (error) {
            console.log('this is error,error',error)
        }
}}

