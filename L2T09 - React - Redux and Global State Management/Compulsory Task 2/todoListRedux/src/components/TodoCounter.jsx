import { useSelector } from "react-redux";

const TodoCounter = () => {
  // Grab todos from store, "state" means all state so we need to specify todos
  let todosCount = useSelector((state) => state.todos.length);

  return (
    // Keep at top of screen even when scrolling
    <div className="sticky-top m-2">
      <h3>Todo List Counter: {todosCount}</h3>
    </div>
  );
};

export default TodoCounter;
