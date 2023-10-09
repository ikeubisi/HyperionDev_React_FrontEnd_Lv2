import { useState } from "react";

export default function Home() {
  // Use state to hold username, welcome name and login label
  const [username, setUsername] = useState("Admin");
  const [welcomeName, setWelcomeName] = useState("Admin");
  const [loginLabel, setLoginLabel] = useState("Login");

  const handleWelcome = () => {
    // User cannot login if field is empty
    if (username.length > 0) {
      setWelcomeName(username);
      setLoginLabel("Logout");
    } else {
      alert("Please enter a username");
    }
  };

  // Clear the welcome on logout
  const handleLogout = () => {
    setWelcomeName("");
    setUsername("");
    setLoginLabel("Login");
  };

  return (
    <>
      <h1 className="mb-3">Home of The React Router Store</h1>
      <hr />

      <div className="container">
        {/* I considered using a ternary which I'd normally use for toggled button settings 
        but it looks cleaner keeping the visibility functions separate given how blocky the content is 
        */}
        {loginLabel === "Login" && (
          <>
            <h1>Please enter your username</h1>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="loginName"
              className="m-2"
            />
            <button className="btn btn-primary" onClick={handleWelcome}>
              {loginLabel}
            </button>
          </>
        )}

        {/* Hide logout button until user has entered their name */}
        {loginLabel === "Logout" && (
          <>
            <h1>Welcome {welcomeName} to The React Router Store</h1>
            <button className="btn btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </>
  );
}
