"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface InputProps {
  isEditing: boolean;
  itemToEditTitle: string;
}

const Input = ({ isEditing, itemToEditTitle }: InputProps) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEditing) {
      setTodoTitle(itemToEditTitle);
    }
  }, [isEditing, itemToEditTitle]);

  const createTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!todoTitle) {
      alert("Title required");
      return;
    }

    setIsLoading(true);

    try {
      const apiUrl = "/api/todo/create";

      const requestData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ todoTitle }),
      };

      const response = await fetch(apiUrl, requestData);

      if (!response.ok) {
        throw new Error(
          `Failed to post title: ${response.status} - ${response.statusText}`
        );
      }

      setTodoTitle("");
      toast.success("Todo created");

      // refresh page on successful request
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
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
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button
        className={`rounded-r-sm w-24 text-white bg-slate-500/75 font-bold hover:bg-slate-500 ${
          todoTitle && "bg-slate-500"
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
