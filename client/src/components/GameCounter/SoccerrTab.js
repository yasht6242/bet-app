// SoccerTab.js

import React, { useState, useEffect } from "react";

const SoccerTab = () => {
  const [soccerData, setSoccerData] = useState([]);

  useEffect(() => {
    const fetchSoccerData = async () => {
      try {
        const response = await fetch(
          ""
        );

        const data = await response.json();
        console.log(data);
        if (Array.isArray(data)) {
          setSoccerData(
            data.filter((event) => event.eventType.name === "Soccer")
          );
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchSoccerData();
  }, []);

  return (
    <div className="tab-pane fade" id="soccer" role="tabpanel">
      <h3>Soccer</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Event Type</th>
          </tr>
        </thead>
        <tbody>
          {soccerData.map((event) => (
            <tr key={event.eventType.id}>
              <td>{event.eventType.league}</td>
              <td>{event.eventType.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SoccerTab;
