import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/layout/Header";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  return (
    <div className="container todo-content">
      <Provider store={store}>
        <Header />
        <TodoCounter />
        <AddTodoForm />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
