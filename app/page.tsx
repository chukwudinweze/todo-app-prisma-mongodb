import Input from "@/components/input";
import React from "react";

const RootPage = () => {
  return (
    <div>
      <h1 className="flex justify-center font-bold text-6xl mt-6 pb-2 border-b border-b-1 border-slate-400">
        Todo List
      </h1>
      <Input />
    </div>
  );
};

export default RootPage;
