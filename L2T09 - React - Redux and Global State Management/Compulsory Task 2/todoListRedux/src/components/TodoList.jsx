import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = [
    { id: 3, content: "Content3", completed: false },
    { id: 4, content: "Content4", completed: false },
  ];

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={crypto.randomUUID()}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
