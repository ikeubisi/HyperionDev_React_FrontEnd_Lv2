import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // Grab todos from store
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          completed={todo.completed}
          content={todo.content}
          id={todo.id}
          key={todo.id}
        />
      )) || <h3>Loading ...</h3>}
    </ul>
  );
};

export default TodoList;
