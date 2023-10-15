import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // Grab todos from store
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          content={todo.content}
          completed={todo.completed}
        />
      )) || <h3>Loading ...</h3>}
    </ul>
  );
};

export default TodoList;
