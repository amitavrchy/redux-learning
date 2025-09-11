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
        },
        deleteUser : (state, action) => {
            state.user = state.user.filter((user) => (
                user.id !== action.payload
            ))
        }
    }
})

export const selectUser = (state: any) => {
    return state.users.user
}
export const {addUser, deleteUser} = userSlice.actions
export default userSlice.reducer