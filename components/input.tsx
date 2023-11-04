"use client";

import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

interface InputProps {
  isEditing: boolean;
  itemToEdit: { id: string; title: string };
}

const Input = ({ isEditing, itemToEdit }: InputProps) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      setTodoTitle(itemToEdit.title);
      inputRef.current?.focus();
    }
  }, [isEditing, itemToEdit.title]);

  const createTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!todoTitle) {
      alert("Title required");
      return;
    }

    setIsLoading(true);

    try {
      const apiUrl = isEditing
        ? `/api/todo/${itemToEdit.id}/edit`
        : "/api/todo/create";
      const reqData = isEditing
        ? { todoTitle }
        : { todoTitle, id: itemToEdit.id };
      const reqMethod = isEditing ? "PATCH" : "POST";

      const requestData = {
        method: reqMethod,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqData),
      };

      const response = await fetch(apiUrl, requestData);

      if (!response.ok) {
        throw new Error(
          `Failed to ${isEditing ? "Edit" : "Create"} Todo: ${
            response.statusText
          }`
        );
      }

      setTodoTitle("");
      toast.success(`${isEditing ? "Todo edited" : "Todo create"}`);

      // refresh page on successful request
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
      // isEditing = false;
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
        ref={inputRef}
        autoFocus={isEditing}
      />
      <button
        className={`rounded-r-sm w-24 text-white bg-slate-500/75 font-bold hover:bg-slate-500 ${
          todoTitle && "bg-slate-500"
        }`}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "..." : isEditing ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default Input;
