import { AddTaskModal } from "@/components/TaskCard/AddTaskModal"
import TaskCard from "@/components/TaskCard/TaskCard"
import { selectTask } from "@/redux/features/task/taskSlice"
import { useSelector } from "react-redux"

export const Task = () => {
  const tasks = useSelector(selectTask)
  console.log(tasks)

  return (
    <div className="mt-5">
      <div className="my-5 flex justify-between">
        <h2 className="text-2xl font-bold">Tasks</h2>
        <AddTaskModal />
      </div>
      {tasks?.map((task: any) => {
        return <TaskCard task={task} />
      })}
    </div>
  )
}
