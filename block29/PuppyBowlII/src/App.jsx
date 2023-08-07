import react from "react";
import { Link, Route, Routes } from "react-router-dom";
import NewPlayerForm from "./components/NewPlayerForm";
import AllPLayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <div id="container">
      <div id="new-player-form">
        <NewPlayerForm />
      </div>
      <div id="all-players-container">
        <AllPLayers />
      </div>
    </div>
  );
}

export default App;
