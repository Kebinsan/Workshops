import { react, useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import NewPlayerForm from "./components/NewPlayerForm";
import AllPlayers from "./components/AllPlayers";
import { fetchAllPlayers } from "./API";
import Home from "./components/Home";

export default function App() {
  const [allPlayers, setAllPlayers] = useState([]);

  //Fetches all players from the api
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
        {/*div created to align register link right*/}
        <div className="regAlign">
          <Link to="/register" className="nav-element">
            Sign Up
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home allPlayers={allPlayers} />} />
        <Route
          path="/roster"
          element={<AllPlayers allPlayers={allPlayers} />}
        />
        <Route path="/register" element={<NewPlayerForm />} />
      </Routes>
    </>
  );
}
