import React from "react";
import ReactDOM from "react-dom/client";
const name = "Hyper Dave";
const element = <h1>Welcome back, {name}</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{element}</React.StrictMode>);
