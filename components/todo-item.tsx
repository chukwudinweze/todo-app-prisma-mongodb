import { Check, CheckCircle, Pencil, Trash2 } from "lucide-react";

interface TodoItemProps {
  title: string;
  id: string;
}

const TodoItem = ({ title, id }: TodoItemProps) => {
  const completeTodo = () => {
    alert("task completed");
  };

  const editTask = () => {
    alert("edit task completed");
  };

  const deleteTask = () => {
    alert("delete task completed");
  };
  return (
    <li className="w-full rounded-sm border p-2 flex">
      {title}
      <div className="ml-auto flex space-x-6">
        <button className="px-1">
          <Pencil className="text-slate-500" />
        </button>
        <button className="px-1" type="submit">
          <CheckCircle className="text-green-300" />
        </button>
        <button className="px-1" type="submit">
          <Trash2 className="text-red-600" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
