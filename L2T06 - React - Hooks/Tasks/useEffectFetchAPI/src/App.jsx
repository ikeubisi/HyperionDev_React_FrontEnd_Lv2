import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [todo, setTodo] = useState("");

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      let data = await response.json();
      console.log(data);
      setTodo(data);
    }
    fetchData();
  }, []);

  return <h1>{todo.title}</h1>;
}

export default App;
