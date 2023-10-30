"use client";

import Input from "@/components/input";
import TodoList from "@/components/todo-list";
import { useCallback, useEffect, useState } from "react";

const Dashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState({ title: "", id: "" });

  const handleEdit = useCallback(
    ({ title, id }: { title: string; id: string }) => {
      setIsEditing(true);
      setItemToEdit({ title, id });
    },
    []
  );

  useEffect(() => {
    console.log(isEditing, itemToEdit);
  }, [isEditing, itemToEdit]);

  return (
    <div>
      <h1 className="flex justify-center font-bold text-6xl mt-6 pb-2 border-b border-b-1 border-slate-400">
        Todo List
      </h1>
      <Input isEditing={isEditing} itemToEditTitle={itemToEdit.title} />
      <TodoList handleEdit={handleEdit} />
    </div>
  );
};

export default Dashboard;
