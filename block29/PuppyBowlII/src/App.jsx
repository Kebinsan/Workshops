import react from "react";
import { Link, Route, Routes } from "react-router-dom";
import NewPlayerForm from "./components/NewPlayerForm";
import AllPLayers from "./components/AllPlayers";
import SinglePlayer from "./components/playerDetails";

export default function App() {
  return (
    <>
      <NewPlayerForm />
      <AllPLayers />
    </>
  );
}
