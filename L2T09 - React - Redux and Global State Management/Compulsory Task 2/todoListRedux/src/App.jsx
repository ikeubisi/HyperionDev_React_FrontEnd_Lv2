import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoCounter from "./components/TodoCounter";

function App() {
  return (
    <div className="container todo-content">
      <TodoCounter />
    </div>
  );
}

export default App;
