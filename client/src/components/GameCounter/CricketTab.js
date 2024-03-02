// CricketTab.js

import React, { useState, useEffect } from "react";
import "./GameCounter.css";

const CricketTab = () => {
  const [cricketData, setCricketData] = useState([]);
  const [backValue, setBackValue] = useState(3.35);
  const [inputValue, setInputValue] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePlaceBet = () => {
    setShowAlert(true);
  };

  const handleConfirmBet = () => {
    alert(
      "Non-Gambling Territories.\nConnecting to our site from non gambling countries, it will be User's responsibility to ensure that their use of the service is lawful.\nUnderage gambling is prohibited.\nPlease confirm if you are 18 years old and above as of today."
    );
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    const fetchCricketData = async () => {
      try {
        const response = await fetch(
          ""
        );
        const data = await response.json();
        if (Array.isArray(data.results)) {
          console.log(data.results);
          setCricketData(data.results);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCricketData();
  }, []);

  return (
    <div className="cricket_tab_news">
      <table className="cricket_tab_news_one_x_two_line table table-hover">
        <thead>
          <th className="view-mobile " colSpan={"2"}></th>
          <th className="text-center">1</th>
          <th className="text-center">X</th>
          <th className="text-center">2</th>
          <th className="text-center"></th>
        </thead>
      </table>
      {cricketData.map((event, key) => {
        return (
          <div key={event.id} className="cricket_tab_news_content">
            <div className="cricket_tab_news_content">{event.event.name}</div>
            <div className="cricket_tab_news_content">
              {event.event.openDate}
            </div>
            <div className="cricket_tab_news_content_onedata"></div>
            <div className="cricket_tab_news_content"></div>
            <div className="cricket_tab_news_content"></div>
            <div className="cricket_tab_news_content"></div>
          </div>
        );
      })}
      </div>
  );
};

export default CricketTab;
