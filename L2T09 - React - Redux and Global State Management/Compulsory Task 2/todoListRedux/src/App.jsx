import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/layout/Header";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import InfoPopup from "./components/InfoPopup";

// Code Influence and Research Main Sources

// Majority of Todo List ADD/DELETE/COMPLETED and good naming conventions learned from
// React redux todo app tutorial | learn redux with redux toolkit (2021) YouTube.
// Available at: https://www.youtube.com/watch?v=fiesH6WU63I (Accessed: 13 October 2023).

// EDIT aspect learned from
// Redux crud tutorial in react - redux toolkit tutorial (2022) YouTube.
// Available at: https://youtu.be/bml92jhF4t8?feature=shared&amp;t=2370 (Accessed: 13 October 2023).

// Todo List CRUD related aspects using React on its own also learned by myself back in April
// https://github.com/markpackham/react_todo_2023/tree/master
// Based on
// Learn react with this one project (2023) YouTube.
// Available at: https://www.youtube.com/watch?v=Rh3tobg7hEo (Accessed: 15 October 2023).

// Todo List CRUD related aspects also influenced from my 2021 project
// 2021 https://github.com/markpackham/react-task-tracker
// Based on
// React JS crash course (2021) YouTube.
// Available at: https://www.youtube.com/watch?v=w7ejDZ8SWv8 (Accessed: 15 October 2023).

function App() {
  return (
    <div className="container todo-content">
      <Provider store={store}>
        <Header />
        <TodoCounter />
        <InfoPopup />
        <AddTodoForm />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
