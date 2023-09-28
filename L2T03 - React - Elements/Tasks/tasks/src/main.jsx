import React from "react";
import ReactDOM from "react-dom/client";

// const name = "Hyper Dave";
// const element = <h1>Welcome back, {name}</h1>;

// const element = (
//   <div>
//     <h1>I'm learning React with HyperionDev</h1>
//     <img
//       src="https://www.hyperiondev.com/static/images/logo.png"
//       style={{ background: "grey" }}
//     />
//   </div>
// );

// demo use of ternary
// const person = "Dave";
// const element = (
//   <div>{person === "Dave" ? <p>Hi, Dave!</p> : <p>Hi, John!</p>}</div>
// );

// demo use of Array map
const itemList = ["Apples", "Strawberries", "Bananas", "Nectarines"];
const element = (
  <div>
    {itemList.map((item, index) => {
      return <li key={index}>{item}</li>;
    })}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{element}</React.StrictMode>);
