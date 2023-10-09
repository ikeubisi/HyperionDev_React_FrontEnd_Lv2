import { useRef } from "react";

export default function Home() {
  const loginName = useRef();

  return (
    <>
      <h1>Home</h1>
      <input ref={loginName} defaultValue="" id="loginName" />

      <button className="btn btn-primary" onClick={() => {}}>
        Login
      </button>
    </>
  );
}
