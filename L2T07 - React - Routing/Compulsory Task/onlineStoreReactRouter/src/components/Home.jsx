import { useState } from "react";

export default function Home() {
  // use state to hold username, welcome name and login label
  const [username, setUsername] = useState("Admin");
  const [welcomeName, setWelcomeName] = useState("Admin");
  const [loginLabel, setLoginLabel] = useState("Login");

  const handleWelcome = () => {
    // user cannot login if field is empty
    if (username.length > 0) {
      setWelcomeName(username);
      setLoginLabel("Logout");
    } else {
      alert("Please enter a username");
    }
  };

  // clear the welcome on logout
  const handleLogout = () => {
    setWelcomeName("");
    setLoginLabel("Login");
  };

  return (
    <>
      <h1>Home</h1>

      <h1>Welcome {welcomeName}</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id="loginName"
      />

      <button className="btn btn-primary" onClick={handleWelcome}>
        {loginLabel}
      </button>
      {/* Hide logout button until user has entered their name */}
      {loginLabel === "Logout" && (
        <button className="btn btn-secondary" onClick={handleLogout}>
          Logout
        </button>
      )}
    </>
  );
}
