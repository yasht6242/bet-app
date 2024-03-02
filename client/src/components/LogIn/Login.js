import React, { useState } from "react";
import MyAccount from "../MyAccount/MyAccount";
import './Login.css'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [confirmAge, setConfirmAge] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmAge = (event) => {
    event.preventDefault();
    setConfirmAge(true);
  };

  const handleExit = (event) => {
    event.preventDefault();
    setUsername("");
    setPassword("");
    setConfirmAge(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (confirmAge) {
      setLoggedIn(true);
    } else {
      // show confirmation alert and buttons
      const confirmed = window.confirm(
        "Non-Gambling Territories.\nConnecting to our site from non gambling countries, it will be User's responsibility to ensure that their use of the service is lawful.\nUnderage gambling is prohibited.\nPlease confirm if you are 18 years old and above as of today."
      );
      if (confirmed) {
        setConfirmAge(true);
      }
    }
  };

  if (loggedIn) {
    return (
      <div>
        <div className="bet_project_head_main_exposure_container">
          <span className="bet_project_head_main">
            Main<strong>100.00</strong>
          </span>
          <span className="bet_project_head_exposure">
            Exposure
            <a>
              <strong>
                (<span>0.00</span>)
              </strong>
            </a>
          </span>
        </div>

        <div className="bet_project_head_reload"></div>
        <div className="bet_project_head_myaccount">
          <MyAccount />
        </div>
      </div>
    );
  } else if (confirmAge) {
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Log In</button>
        <button onClick={handleExit}>Exit</button>
      </form>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    );
  }
}

export default Login;
