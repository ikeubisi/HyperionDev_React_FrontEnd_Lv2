import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = [
    { id: 4, content: "Content4", completed: false },
    { id: 5, content: "Content5", completed: false },
  ];

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={crypto.randomUUID()}
          id={todo.id}
          content={todo.content}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
