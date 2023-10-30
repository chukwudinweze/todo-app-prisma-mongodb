"use client";

import React, { useState } from "react";

const Input = () => {
  const [todoValue, setTodoValue] = useState("");
  const createTodo = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("todo created", todoValue);
    setTodoValue("");
  };
  return (
    <form
      onSubmit={createTodo}
      className="w-full flex border border-slate-400 rounded-sm mt-5"
    >
      <input
        className=" py-2 px-4 w-full outline-none "
        type="text"
        placeholder="Create todo..."
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button
        className="rounded-r-sm w-24 text-white bg-slate-500/75 font-bold hover:bg-slate-500"
        type="submit"
      >
        Add todo
      </button>
    </form>
  );
};

export default Input;
