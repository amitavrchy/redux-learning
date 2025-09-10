import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "./features/task/taskSlice"
import userReducer from "./features/user/userSlice"
const store = configureStore({
    reducer: {
        tasks: taskReducer,
        users: userReducer
    }
})
export default store