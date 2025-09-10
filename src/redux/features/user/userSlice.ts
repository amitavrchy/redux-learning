import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [
        {
            id: 1,
            name: "Amitav Roy Chowdhury",
            role: "Developer"
        },
        {
            id: 2,
            name: "Sunil Dash",
            role: "Programmer"
        }
    ]
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser : (state, action) => {
            const userData = action.payload;
            state.user.push(userData)
        }
    }
})

export const selectUser = (state: any) => {
    return state.users.user
}
export default userSlice.reducer