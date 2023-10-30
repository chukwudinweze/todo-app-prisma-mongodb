"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface InputProps {
  isEditing: boolean;
  itemToEditTitle: string;
}

const Input = ({ isEditing, itemToEditTitle }: InputProps) => {
  const [todoValue, setTodoValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEditing) {
      setTodoValue(itemToEditTitle);
    }
  }, [isEditing, itemToEditTitle]);

  const createTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todoValue) {
      alert("Please enter a value");
      return;
    }
    setIsLoading(true);
    // Todo: post to the db
    console.log("todo created", todoValue);
    toast.success("Todo created");
    setTodoValue("");
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={createTodo}
      className="w-full flex border border-slate-400 rounded-sm mt-5 mb-5"
    >
      <input
        disabled={isLoading}
        className=" py-2 px-4 w-full outline-none "
        type="text"
        placeholder="Create todo..."
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button
        className={`rounded-r-sm w-24 text-white bg-slate-500/75 font-bold hover:bg-slate-500 ${
          todoValue && "bg-slate-500"
        }`}
        type="submit"
        disabled={isLoading}
      >
        {isEditing ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default Input;
