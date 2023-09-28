import { useState } from "react";
import "./App.css";

const user = {
  name: "Bob",
  surname: "Smith",
  date_of_birth: "01/01/1990",
  address: "123 Street Road",
  country: "Wales",
  email: "bob@gmail.com",
  telephone: 123456789,
  company: "Microsoft",
  profile_picture:
    "https://techcrunch.com/wp-content/uploads/2019/07/Bob-Smith_portrait-1.jpg?w=490&crop=2",
};

function App() {
  const [count, setCount] = useState(0);

  return <>Hello</>;
}

export default App;
