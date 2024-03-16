import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getToDo = createAsyncThunk('allToDo', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return response.data;
})


const initialState = {
    todo: [],
    loading: false
}

const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getToDo.pending, (state) => { 
                state.loading = true
            })
            .addCase(getToDo.fulfilled, (state, action) => { 
                state.loading = false;
                state.todo = action.payload
            })
     }
})

export default TodoSlice.reducer;