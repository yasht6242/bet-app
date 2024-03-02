import { React, useState } from "react";
import "./Dashboard.css";
import logo from "../../assets/mainlogo.png";
import Login from "../LogIn/Login";


function Dashboard({ performSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleClear() {
    setSearchTerm("");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      performSearch(searchTerm);
    }
  }
  return (
    <div className="betproject_dashboard_container">
      <div className="bet_project_logo_search_main_exposure_reload_myaccount">
        <div className="bet_project_head_logo">
          <img alt="logo" className="bet_project_head_logo_image" src={logo} />
          <a className="bet_project_head_logo_image_text" href="kdmkwd">
            YOUBET
          </a>
        </div>
        <div className="bet_project_head_search">
          {/* <div className="bet_project_head_search_input_group" type="text" placeholder="Search..."  /> */}
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={() => performSearch(searchTerm)}>Search</button>
          <button onClick={handleClear}>Clear</button>
        </div>
        <div className="bet_project_head_search_login_component">
          <Login />
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
