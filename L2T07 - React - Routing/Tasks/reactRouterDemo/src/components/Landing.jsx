import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h2>Welcome to the Homepage!</h2>
      <nav>
        <Link to="/cart">Cart</Link>
      </nav>
    </div>
  );
}
