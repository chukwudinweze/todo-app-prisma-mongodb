import TodoItem from "./todo-item";

const TodoList = () => {
  // fetch todo
  const todo = [
    { title: "eat rice", id: "1" },
    { title: "eat rice", id: "1" },
    ,
    { title: "eat rice", id: "1" },
  ];
  return (
    <div className="w-full rounded-sm border p-3 space-y-2">
      {todo.map((todo) => (
        <TodoItem key={todo?.id} title={todo?.id!} id={todo?.id!} />
      ))}
    </div>
  );
};

export default TodoList;
