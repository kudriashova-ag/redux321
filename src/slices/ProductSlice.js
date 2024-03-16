import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 1,
        name: 'Product 1',
        price: 12
    },
    {
        id: 2,
        name: 'Product 2',
        price: 24
    }
]

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        removeProduct: (state, action) => {
           return state.filter(item => item.id !== action.payload)
        },
        changeProduct: (state, action) => { 
            // {id: 1, product: {name: 'dfg', price: '123'}}
            const findProduct = state.find(item => item.id === action.payload.id)
            findProduct.name = action.payload.product.name;
            findProduct.price = action.payload.product.price;
        },
    }
});

export const { addProduct, removeProduct, changeProduct } = ProductSlice.actions;
export default ProductSlice.reducer;

