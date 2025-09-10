import type ITask from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";


interface InitialState {
    task: ITask[]
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (data: DraftTask) : ITask => {
    return {
        id: nanoid(),
        isCompleted: false,
        ...data
    }
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
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            const taskData = createTask(action.payload)
            state.task.push(taskData)
        },
        toggleCompletedState: (state, action: PayloadAction<String>) => {
            state.task.forEach((data) => {
                data.id === action.payload ? (data.isCompleted = !data.isCompleted): data
            })
        },
        deleteTask: (state, action: PayloadAction<String>) => {
            state.task = state.task.filter((task) => task.id !== action.payload)
        }
    }
})


export const selectTask = (state: any) => {
    return state.tasks.task
}

export const {addTask,toggleCompletedState,deleteTask} = taskSlice.actions

export default taskSlice.reducer

