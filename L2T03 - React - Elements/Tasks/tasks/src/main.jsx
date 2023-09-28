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
// const itemList = ["Apples", "Strawberries", "Bananas", "Nectarines"];
// const element = (
//   <div>
//     {itemList.map((item, index) => {
//       return <li key={index}>{item}</li>;
//     })}
//   </div>
// );

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

const currentDateTime = new Date().toLocaleString();

const element = (
  <>
    <h1>Current Date Time {currentDateTime}</h1>

    <a href="https://github.com/markpackham" target="_blank">
      A Link to my Github
    </a>

    <h2>React advantages over Vanilla JS</h2>
    <ul>
      <li>Consistent Standards for a frontend layout</li>
      <li>Better performance - far less page changes due to the Virtual DOM</li>
      <li>Supported by the giant company Meta</li>
    </ul>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{element}</React.StrictMode>);
