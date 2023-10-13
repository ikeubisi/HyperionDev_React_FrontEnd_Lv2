import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoCounter from "./components/TodoCounter";
import TodoCreateForm from "./components/TodoCreateForm";

function App() {
  return (
    <div className="container todo-content">
      <TodoCounter />
      <TodoCreateForm />
    </div>
  );
}

export default App;
