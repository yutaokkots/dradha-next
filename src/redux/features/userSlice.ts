import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type UserState = {
    value: string;
  };

const initialState: UserState = {
    value: '',
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})