import { Check, CheckCircle, Pencil, Trash2 } from "lucide-react";

interface TodoItemProps {
  title: string;
  id: string;
  handleEdit: ({ title, id }: { title: string; id: string }) => void;
}

const TodoItem = ({ title, id, handleEdit }: TodoItemProps) => {
  const completeTodo = () => {
    alert("task completed");
  };

  const editTask = () => {
    handleEdit({ title, id });
  };

  const deleteTask = () => {
    alert("delete task completed");
  };
  return (
    <li className="w-full rounded-sm border p-2 flex">
      {title}
      <div className="ml-auto flex space-x-6">
        <button onClick={editTask} className="px-1">
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
