import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import GameCounter from "./components/GameCounter/GameCounter";
import OpenBets from "./components/OpenBets/OpenBets";
import BetsSection from "./components/BetsSection/BetsSection"
import InPlay from "./components/InPlay/InPlay";

function App() {
  return (
    <div className="bet_project">
      <Dashboard />
      <Navbar />
      <div className="bet_project_sidebar_gamecounter_container">
        <Sidebar />
        {/* <GameCounter /> */}
        {/* <BetsSection /> */}
        <InPlay />
        <OpenBets />
      </div>
    </div>
  );
}

export default App;
