import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayMoney from "./components/DisplayMoney";
import DepositMoney from "./components/DepositMoney";
import WithdrawMoney from "./components/WithdrawMoney";

function App() {
  return (
    <div className="container">
      <DisplayMoney />
      <hr />
      <DepositMoney balance={1000} />
      <hr />
      <WithdrawMoney balance={5000} />
    </div>
  );
}

export default App;
