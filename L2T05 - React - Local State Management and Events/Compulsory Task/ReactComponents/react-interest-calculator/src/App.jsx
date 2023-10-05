import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayMoney from "./components/DisplayMoney";
import DepositMoney from "./components/DepositMoney";

function App() {
  return (
    <div className="container">
      <DisplayMoney />
      <DepositMoney balance={1000} />
    </div>
  );
}

export default App;
