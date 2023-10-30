import TodoItem from "./todo-item";

interface TodoListProps {
  handleEdit: ({ title, id }: { title: string; id: string }) => void;
}

const TodoList = ({ handleEdit }: TodoListProps) => {
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
        <TodoItem
          key={todo?.id}
          title={todo?.title!}
          id={todo?.id!}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
