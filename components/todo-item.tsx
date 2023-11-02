"use client";

import { CheckCircle, Pencil, Trash2 } from "lucide-react";

interface TodoItemProps {
  title: string;
  id: string;
  isCompleted?: boolean;
  handleEdit: ({ title, id }: { title: string; id: string }) => void;
}

const TodoItem = ({ title, id, isCompleted, handleEdit }: TodoItemProps) => {
  const completeTodo = () => {
    alert("task completed");
  };

  const editTask = () => {
    handleEdit({ title, id });
    alert("task ");
  };

  const deleteTask = () => {
    alert("delete task completed");
  };

  const todoItemStyle = isCompleted
    ? "w-full rounded-sm border p-2 flex bg-green-100 text-green-600"
    : "w-full rounded-sm border p-2 flex";

  return (
    <li className={todoItemStyle}>
      {title}
      <div className="ml-auto flex space-x-6">
        {isCompleted && (
          <p className="text-slate-600 text-xs italic">completed</p>
        )}
        {!isCompleted && (
          <button onClick={editTask} className="px-1">
            <Pencil className="text-slate-500" />
          </button>
        )}
        {!isCompleted && (
          <button onClick={completeTodo} className="px-1" type="submit">
            <CheckCircle className="text-green-300" />
          </button>
        )}
        <button onClick={deleteTask} className="px-1" type="submit">
          <Trash2 className="text-red-600" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
