export default interface ITask {
    id: string
    title: string
    description: string
    dueDate: string
    isCompleted: boolean
    priority: "High" | "Medium" | "Low"
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string; // Format: "YYYY-MM"
  isCompleted: boolean;
  priority: 'Low' | 'Medium' | 'High';
}
