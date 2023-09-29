import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import BraveTalk from "./components/BraveTalk";
import PermiumCalls from "./components/PermiumCalls";
import HostWeb3 from "./components/HostWeb3";

function App() {
  return (
    <>
      <a href="https://talk.brave.com/" target="_blank">
        <h1>Website Cloned</h1>
      </a>
      <BraveTalk></BraveTalk>
      <PermiumCalls></PermiumCalls>
      <HostWeb3></HostWeb3>
      {/* demo props being passed down */}
      <Footer policy={"privacy policy"} status={"Service status"}></Footer>
    </>
  );
}

export default App;
