import TodoItem from "./todo-item";

const TodoList = () => {
  // fetch todo
  const todo = [
    { title: "Drink Water", id: "1" },
    { title: "Have some rest", id: "2" },
    ,
    { title: "Take a walk", id: "3" },
  ];
  return (
    <ul className="w-full rounded-sm border p-3 space-y-2">
      {todo.map((todo) => (
        <TodoItem key={todo?.id} title={todo?.title!} id={todo?.id!} />
      ))}
    </ul>
  );
};

export default TodoList;
