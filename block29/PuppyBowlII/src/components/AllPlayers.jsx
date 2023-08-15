import { React } from "react";
import Player from "./Player";

export default function AllPLayers({ allPlayers }) {
  return (
    <>
      <h1 className="page-header">Roster</h1>
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
    </>
  );
}
