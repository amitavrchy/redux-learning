export default interface ITask {
    id: string
    title: string
    description: string
    dueDate: string
    isCompleted: boolean
    priority: "High" | "Medium" | "Low",
    userAssign: String | null
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string; // Format: "YYYY-MM"
  isCompleted: boolean;
  priority: 'Low' | 'Medium' | 'High';
  userAssign: String
}
export interface User {
  id: string;
  name: string;
  role: "Developer" | "Programmer"
}
