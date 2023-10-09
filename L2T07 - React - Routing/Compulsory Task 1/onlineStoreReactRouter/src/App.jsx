import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products" element={<About />} />
    </Routes>
  );
}

export default App;
