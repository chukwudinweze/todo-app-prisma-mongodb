interface TodoItemProps {
  title: string;
  id: string;
}

const TodoItem = ({ title, id }: TodoItemProps) => {
  return <div>TodoItem</div>;
};

export default TodoItem;
