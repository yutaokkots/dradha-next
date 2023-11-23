import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('users/getAllUsers', async(thunkAPI) => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users?_limit=5"
    )
    const data = await response.json();
    return data;
})

type UserState = {
    entities: string[];
    status: string,
    error: string | any
  };

const initialState: UserState = {
    entities: [],
    status: "",
    error: ""
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = 'loading';
        }),
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.entities.push(...action.payload);
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.status = "could not retrieve";
            state.error = action.error.message;

        }) 
    }
})

export default userSlice.reducer
// import from src/redux/store.ts