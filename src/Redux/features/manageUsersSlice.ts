import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface User {
    id?: string;
    _id?: string;
    email?: string;
    username?: string;
}

interface CustomerState {
    value: User
}
const initialState: CustomerState = {
    value: {}
};



export const manageUserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<CustomerState>) => {
            state.value = action.payload.value;

        },
        clearData: (state) => {
            state.value= {}
        }
    }
})
export const { setData, clearData } = manageUserSlice.actions

export default manageUserSlice.reducer
