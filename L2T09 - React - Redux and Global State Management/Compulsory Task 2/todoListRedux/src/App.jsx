import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/layout/Header";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

// Majority of Todo List Add/Delete/Completed creation code via React & Redux learned from
// React redux todo app tutorial | learn redux with redux toolkit (2021) YouTube.
// Available at: https://www.youtube.com/watch?v=fiesH6WU63I (Accessed: 13 October 2023).

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
