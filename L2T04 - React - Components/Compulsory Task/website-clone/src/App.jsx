import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import BraveTalk from "./components/BraveTalk";
import PermiumCalls from "./components/PermiumCalls";
import HostWeb3 from "./components/HostWeb3";
import BraveLogo from "./components/BraveLogo";

function App() {
  return (
    <>
      <div className="background">
        <a href="https://talk.brave.com/" target="_blank">
          <h1 className="p-5">Website Cloned</h1>
        </a>
        <BraveLogo />
        <BraveTalk />
        <PermiumCalls />
        <HostWeb3 />
        {/* demo props being passed down */}
        <Footer policy={"privacy policy"} status={"Service status"} />
      </div>
    </>
  );
}

export default App;
