// TennisTab.js

import React, { useState, useEffect } from "react";

const TennisTab = () => {
  const [tennisData, setTennisData] = useState([]);

  useEffect(() => {
    const fetchTennisData = async () => {
      try {
        const response = await fetch(
          "",
         
        );
        const data = await response.json();
        console.log(data);
        if(Array.isArray(data)){
          setTennisData(
            data.filter((event) => event.eventType.name === "Tennis")
          );
        }
       
      } catch (error) {
        console.error(error);
      }
    };
    fetchTennisData();
  }, []);

  return (
    <div className="tab-pane fade" id="tennis" role="tabpanel">
      <h3>Tennis</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Event Type</th>
          </tr>
        </thead>
        <tbody>
          {tennisData.map((event) => (
            <tr key={event.eventType.id}>
              <td>{event.eventType.name}</td>
              <td>{event.eventType.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TennisTab;
