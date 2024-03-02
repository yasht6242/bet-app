import React, { useState, useEffect } from "react";
import { Tabs, Tab, Table } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./GameCounter.css";
import cricket from "../../assets/slider.png";
import CricketTab from "./CricketTab.js";
import SoccerTab from "./SoccerrTab.js";
import TennisTab from "./TennisTab.js";
import axios from "axios";

import io from "socket.io-client";

function GameCounter() {
  return (
    <div className="bet_app_game_counter_container">
      <div className="bet_app_game_counter_container_image">
        <img src={cricket} alt="dwdw" />
      </div>
      <div className="col-md-12 bet_app_game_counter_container_information_display">
        <h3 className="bet_app_game_counter_cotainer_information_display_highlights">
          Highlights
        </h3>
        <tabset className="game-menu-tab hidden-xs homeevent tab-container">
          <ul className="nav nav-tabs">
            <li className="nav-item active">
              <a href="#cricket" className="nav-link active">
                <span>Cricket</span>
                {/* <CricketTab /> */}
              </a>
            </li>
            <li className="nav-item">
              <a href="#soccerr" className="nav-link active">
                <span>Soccerr</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#tennis" className="nav-link active">
                <span>Tennis</span>
              </a>
            </li>
          </ul>
        </tabset>
        <div className="container"></div>
      </div>
    </div>
  );
}

export default GameCounter;
