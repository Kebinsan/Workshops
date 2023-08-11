import { React, useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import Player from "./Player";

export default function AllPLayers() {
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
    <div id="all-players-container">
      {allPlayers.map((player) => {
        return (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            breed={player.breed}
            imageUrl={player.imageUrl}
          />
        );
      })}
    </div>
  );
}
