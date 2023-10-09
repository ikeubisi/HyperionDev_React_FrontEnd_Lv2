import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const nav = useNavigate();

  // The first argument is the route to navigate to, in this case, /products. This
  // means the user will be redirected to the /products page when clicking the
  // button.

  // The second argument is an object containing additional state information
  // to pass along with the navigation. In this example, it includes a product
  // property with the value "iPhone 12" (this could also be any other value or
  // state).

  // This information could be accessed on the destination route, typically through the
  // useLocation hook.

  return (
    <div className="tab-content">
      <button
        onClick={() => nav(`/products`, { state: { product: "iPhone 12" } })}
      >
        Buy
      </button>
    </div>
  );
}

export default App;
