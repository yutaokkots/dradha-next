import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Fetches a list of users from the specified API endpoint.
 *
 * @param thunkAPI - The Redux Thunk API.
 * @returns A Promise that resolves to the fetched user data.
 */
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
        // Handle pending state when users are being fetched
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = 'loading';
        }),
        // Handle fulfilled state when users are successfully fetched
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.entities.push(...action.payload);
        })
         // Handle rejected state when there is an error fetching users
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.status = "could not retrieve";
            state.error = action.error.message;

        }) 
    }
})

export default userSlice.reducer
// import from src/redux/store.ts