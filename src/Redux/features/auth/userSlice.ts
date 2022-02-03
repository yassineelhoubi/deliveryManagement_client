import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    token?: string;
    role?: string;
    email?: string;
    username?: string;
}
const initialState: User = {
    token: '',
    role: '',
    username:''
};

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userData: (state, action: PayloadAction<User>) => {
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.username = action.payload.username;
        },
        clearData: (state) => {
            state.token = '';
            state.role = '';
            state.username = '';
        }
    }
})

export const { userData, clearData } = userSlice.actions

export default userSlice.reducer
