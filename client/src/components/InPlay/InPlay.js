import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InPlay.css";

function Inplay() {
  const [inPlayData, setInPlayData] = useState([]);
  const [betData, setBetData] = useState([]);

  useEffect(() => {
    const fetchInPlayData = async () => {
      try {
        const response = await fetch(
          ""
        );
        const responsetwo = await fetch(
          ""
        );

        const data = await response.json();
        const datatwo = await responsetwo.json();
        if (Array.isArray(data.results)) {
          console.log(data.results);
          setInPlayData(data.results);
        }
        if (Array.isArray(datatwo.results)) {
          console.log(datatwo.results);
          console.log(datatwo.results.availableToLay)
          setBetData(datatwo.results);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchInPlayData();
  }, []);

  return (
    <div className="bets_section_inplay">
      <div className="bets_section_inplay_dashboard ">
        <ul className="bets_section_inplay_dashboard">
          <li className="bets_section_inplay_subtabs">
            {" "}
            <a>In-Play</a>
          </li>
          <li className="bets_section_inplay_subtabs">
            <a>Today</a>
          </li>
          <li className="bets_section_inplay_subtabs">
            <a>Tomorrow</a>
          </li>
        </ul>
      </div>
      <div className="bets_Section_inplay_events">
        <div className="bets_section_inplay_game_name_container">
          <h3>Soccerr</h3>
        </div>
        <div className="bets_section_inplay_game_headbar">
          <h3 className="bets_section_inplay_game_content">1</h3>
          <h3 className="bets_section_inplay_game_content">X</h3>
          <h3 className="bets_section_inplay_game_content">2</h3>
        </div>
        <div>
          {inPlayData.map((event) => {
            return (
              <div className="bets_Section_inplay_events_soccerr_matches_details">
                <div className="bets_Section_inplay_events_soccerr_matches_details_team ">
                  {event.home.name}
                  {/* <span>{event.markets.runners.exchange.availableToBack}</span> */}
                </div>
                <span className="bets_Section_inplay_events_soccerr_matches_details_team team_space">
                  v
                </span>
                <div className="bets_Section_inplay_events_soccerr_matches_details_team team_space">
                  {event.away.name}
                </div>
              </div>
            );
          })}
         
        </div>
      </div>
    </div>
  );
}

export default Inplay;
