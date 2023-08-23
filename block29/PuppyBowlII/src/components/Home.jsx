import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AllPlayers from "./AllPlayers";
import NewPlayerForm from "./NewPlayerForm";
import puppy from "../images/puppy_logo.png";

export default function Home({ allPlayers }) {
  return (
    <div className="welcome-container">
      <h1 className="home-title">Welcome to Puppy Bowl!</h1>
      <img className="puppy-logo" src={puppy} alt="puppy bowl logo not found" />
      <div className="home-button-container">
        <div className="home-left-content">
          <h2>Check out the doggo roster</h2>
          <Link to="/roster">
            <button className="home-buttons">Roster</button>
          </Link>
        </div>
        <div className="home-right-content">
          <h2>Sign up your cute pupper</h2>
          <Link to="/register">
            <button className="home-buttons">Sign Up</button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route
          path="/roster"
          element={<AllPlayers allPlayers={allPlayers} />}
        />
        <Route path="/register" element={<NewPlayerForm />} />
      </Routes>
    </div>
  );
}
