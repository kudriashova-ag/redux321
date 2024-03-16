import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../slices/ProductSlice";
import ToDoSlice from "../slices/ToDoSlice";

export const store = configureStore({
    reducer: {
        products: ProductSlice,
        todo: ToDoSlice
    }
});