import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import productSlice from "./productSlice";
import textSlice from "./textSlice";
import TodoSlice from "./TodoSlice";

const store = configureStore({
    reducer:{
        card: cardSlice,
        products:productSlice,
        data:textSlice,
        todo:TodoSlice,
    },
   
})

export default store;