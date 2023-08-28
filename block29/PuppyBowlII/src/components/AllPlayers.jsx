import { useState } from "react";
import Player from "./Player";
import PlayerDetails from "./PlayerDetails";

export default function AllPlayers({
  allPlayers,
  isOpen,
  togglePopup,
  handleRemove,
}) {
  const [playerId, setPlayerId] = useState("");

  return (
    <>
      <h1 className="page-header">Roster</h1>
      <div id="all-players-container">
        {/*loops through all players individually to display each individual using player component*/}
        {allPlayers.map((player) => {
          return (
            <Player
              key={player.id}
              id={player.id}
              setPlayerId={setPlayerId}
              name={player.name}
              breed={player.breed}
              imageUrl={player.imageUrl}
              handleRemove={handleRemove}
              togglePopup={togglePopup}
            />
          );
        })}
      </div>
      {/*if isOpen is true, the player details pop up displays*/}
      {isOpen && (
        <PlayerDetails
          playerId={playerId}
          togglePopup={togglePopup}
          handleRemove={handleRemove}
        />
      )}
    </>
  );
}
