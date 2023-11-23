import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('users/getAllUsers', async(thunkAPI) => {
    const response = await fetch('url')
    const data = await response.json();
    return data;
})

type UserState = {
    entities: string[];
  };

const initialState: UserState = {
    entities: [],
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.entities.push(...action.payload)
        })
    }
})