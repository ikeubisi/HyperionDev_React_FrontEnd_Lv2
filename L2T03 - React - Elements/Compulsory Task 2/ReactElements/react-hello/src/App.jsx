import { useState } from "react";
import "./App.css";

const user = {
  name: "Bob",
  surname: "Smith",
  date_of_birth: "01/01/1990",
  address: "123 Street, Some Town 777HHHRRR",
  country: "Wales",
  email: "bob@gmail.com",
  telephone: 123456789,
  company: "Microsoft",
  profile_picture:
    "https://techcrunch.com/wp-content/uploads/2019/07/Bob-Smith_portrait-1.jpg?w=490&crop=2",
  shopping_cart: ["shoes", "socks", "tie", "coat"],
};

const username = user.name + " " + user.surname;

const shoppingList = (
  <div>
    <h1>{username}</h1>
    <h4>Born: {user.date_of_birth}</h4>
    <ul>
      <li>{user.address}</li>
      <li>{user.country}</li>
      <li>{user.email}</li>
      <li>{user.telephone}</li>
      <li>Company: {user.company}</li>
    </ul>

    <img src={user.profile_picture} alt={username} />

    <h2>Full user object output</h2>
    <ul>
      {/* Object entries learned from MDN Webdocs
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries */}
      {/* key must be unique */}
      {Object.entries(user).map(([key, value]) => {
        return <li key={key}>{value}</li>;
      })}
    </ul>
  </div>
);

function App() {
  const [count, setCount] = useState(0);

  return <>{shoppingList}</>;
}

export default App;
