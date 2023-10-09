import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";

function App() {
  return (
    <div className="container">
      {/* If this was larger than a 3 page site I'd use a separate component and call it Navbar */}
      <nav className="navbar navbar-expand-lg mb-3 rounded">
        <div className="container">
          <ul className="navbar-nav">
            <li className=" nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className=" nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className=" nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
