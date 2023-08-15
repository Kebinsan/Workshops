import { react, useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import NewPlayerForm from "./components/NewPlayerForm";
import AllPLayers from "./components/AllPlayers";
import PlayerDetails from "./components/playerDetails";
import { fetchAllPlayers } from "./API";

export default function App() {
  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    const getAllPlayers = async () => {
      try {
        const result = await fetchAllPlayers();
        setAllPlayers(result);
      } catch (error) {
        console.error(error);
      }
    };
    getAllPlayers();
  }, []);

  return (
    <>
      <nav className="nav-bar">
        <Link to="/" className="nav-element">
          Home
        </Link>

        <Link to="/roster" className="nav-element">
          Roster
        </Link>

        <Link to="/register" className="nav-element">
          register
        </Link>
      </nav>
      <Routes>
        <Route
          path="/roster"
          element={<AllPLayers allPlayers={allPlayers} />}
        />
        <Route path="/register" element={<NewPlayerForm />} />
      </Routes>
    </>
  );
}
