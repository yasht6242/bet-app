import React from "react";
import "./OpenBets.css";
import Dropdown from "react-bootstrap/Dropdown";

function OpenBets() {
    const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    
    <div className="bets_app_open_bets_container">
      <div className="bets_app_open_bets_text">OPEN BETS</div>
      <div className="dropdown">
      <button className="bets_app_open_bets_dropdown" onClick={handleOpen}>Select Market</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>Market 1</button>
          </li>
          <li className="menu-item">
            <button>Market 2</button>
          </li>
        </ul>
      ) : null}
      {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
    </div>
    </div>
  );
}

export default OpenBets;
