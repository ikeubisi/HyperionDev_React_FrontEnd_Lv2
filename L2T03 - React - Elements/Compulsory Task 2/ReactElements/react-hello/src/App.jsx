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
const email = "mailto: " + user.email;
const phone = "tel:" + user.telephone;

const userBobSmith = (
  <div className="container">
    <h1>{username}</h1>
    <h6>Born: {user.date_of_birth}</h6>
    <ul>
      <li>{user.address}</li>
      <li>{user.country}</li>
      <li>
        <a href={email}>Send Email</a>
      </li>
      <li>
        <a href={phone}>Call {user.telephone}</a>
      </li>
      <li>
        Company: <span className="fw-bold">{user.company}</span>
      </li>
    </ul>

    <img className="profile" src={user.profile_picture} alt={username} />

    <h3 className="mt-2">Shopping List</h3>
    <ul>
      {user.shopping_cart.map((item, index) => {
        {
          /* key must be unique */
        }
        return <li key={index}>{item}</li>;
      })}
    </ul>

    <h2>Full user object output</h2>
    <p>Demo of Object.entries().map in action.</p>
    <ol>
      {/* Object entries learned from MDN Webdocs
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries */}
      {Object.entries(user).map(([key, value]) => {
        return <li key={key}>{value}</li>;
      })}
    </ol>
  </div>
);

function App() {
  const [count, setCount] = useState(0);

  return <>{userBobSmith}</>;
}

export default App;
