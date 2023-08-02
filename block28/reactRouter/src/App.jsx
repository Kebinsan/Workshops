import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";

function App() {
  return (
    <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to="/blue">BLUE</Link>
        <Link to="/">HOME</Link>
        <Link to="/red">RED</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/Red" element={<Red />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
