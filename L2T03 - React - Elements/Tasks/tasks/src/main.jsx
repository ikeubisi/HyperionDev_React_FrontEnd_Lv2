import React from "react";
import ReactDOM from "react-dom/client";

// const name = "Hyper Dave";
// const element = <h1>Welcome back, {name}</h1>;

const element = (
  <div>
    <h1>I'm learning React with HyperionDev</h1>
    <img
      src="https://www.hyperiondev.com/static/images/logo.png"
      style={{ background: "grey" }}
    />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{element}</React.StrictMode>);
