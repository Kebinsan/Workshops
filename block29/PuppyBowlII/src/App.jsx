import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import NewPlayerForm from "./components/NewPlayerForm";
import AllPlayers from "./components/AllPlayers";
import Home from "./components/Home";
import { fetchAllPlayers, removePlayer } from "./API";

export default function App() {
  const [allPlayers, setAllPlayers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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

  //toggles player details pop-up open and close
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  //handles remove button, removes a player when clicked
  const handleRemove = async (id) => {
    try {
      const result = await removePlayer(id);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

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
        <Route path="/" element={<Home />} />
        <Route
          path="/roster"
          element={
            <AllPlayers
              allPlayers={allPlayers}
              isOpen={isOpen}
              togglePopup={togglePopup}
              handleRemove={handleRemove}
            />
          }
        />
        <Route
          path="/register"
          element={
            <NewPlayerForm
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              togglePopup={togglePopup}
              handleRemove={handleRemove}
            />
          }
        />
      </Routes>
    </>
  );
}
