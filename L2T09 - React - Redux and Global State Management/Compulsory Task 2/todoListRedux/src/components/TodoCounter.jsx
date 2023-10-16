import { useSelector } from "react-redux";

const TodoCounter = () => {
  // Grab todos from store, "state" means all state so we need to specify todos
  const todosCount = useSelector((state) => state.todos);

  // Filter only todos that are completed
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  return (
    // Keep at top of screen even when scrolling
    <div className="sticky-top m-2">
      <div className="todoCounter">
        <h3>Total Todos: {todosCount.length}</h3>
        <h3 className="text-success">
          Completed Todos: {completedTodos.length}
        </h3>
        <h3 className="text-danger">
          Incomplete Todos: {todosCount.length - completedTodos.length}
        </h3>
      </div>
    </div>
  );
};

export default TodoCounter;
