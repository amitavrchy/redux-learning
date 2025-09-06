import type ITask from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
    task: ITask[]
}

const initialState : InitialState = {
    task: [
        {
            id: "1",
            title: "Initialize Something",
            description: "Create homepage and routing",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "High"
        },
    ]
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})


export const selectTask = (state: any) => {
    return state.tasks.task
}

export default taskSlice.reducer

