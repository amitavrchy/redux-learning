// TaskCard.tsx
import React from 'react';
import type { Task } from '@/types';
import { Button } from '../ui/button';
import { deleteTask, toggleCompletedState } from '@/redux/features/task/taskSlice';
import { useDispatch } from 'react-redux';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  console.log(task)
  const priorityColor = {
    High: 'text-red-600',
    Medium: 'text-yellow-600',
    Low: 'text-green-600',
  };
  const dispatch = useDispatch()

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 w-full max-w-md">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-semibold text-gray-800">{task.title}</h2>
        <span
          className={`text-sm font-medium ${priorityColor[task.priority]} ml-2`}
        >
          {task.priority}
        </span>
      </div>

      <p className="text-gray-600 text-sm mt-1 text-left">{task.description}</p>

      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <div>
          <span>Due: </span>
          <span>{task.dueDate}</span>
        </div>
        <div>
          <span
            className={`font-semibold ${task.isCompleted ? 'text-green-600' : 'text-orange-500'
              }`}
          >
            {task.isCompleted ? 'Completed' : 'Pending'}
          </span>
        </div>
      </div>
      <div className='flex gap-2 mt-5'>
        <Button className='bg-green-600' onClick={() => dispatch(toggleCompletedState(task.id))}>Mark as Completed</Button>
        <Button className='bg-red-600' onClick={() => dispatch(deleteTask(task.id))}>Delete Task</Button>
      </div>
    </div>
  );
};

export default TaskCard;
