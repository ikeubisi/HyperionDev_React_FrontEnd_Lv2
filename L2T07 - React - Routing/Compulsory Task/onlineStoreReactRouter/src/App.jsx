import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Home from "./components/Home";
import Products from "./components/Products";
import Navbar from "./components/sitewide/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
