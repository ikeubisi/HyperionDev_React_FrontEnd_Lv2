import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import BraveTalk from "./components/BraveTalk";
import PermiumCalls from "./components/PermiumCalls";
import HostWeb3 from "./components/HostWeb3";
import BraveLogo from "./components/BraveLogo";

function App() {
  return (
    <div className="background-container">
      <div className="background">
        <a href="https://talk.brave.com/" target="_blank">
          <h1 className="p-5">Website cloned - Brave Talk</h1>
        </a>

        <BraveLogo />
        <main>
          {/* demo props being passed down */}
          <BraveTalk title={"Brave Talk"} />
          <PermiumCalls title={"Premium Calls"} />
          <HostWeb3 title={"Host a Web3 call"} />
        </main>
        <Footer policy={"privacy policy"} status={"Service status"} />
      </div>
    </div>
  );
}

export default App;
