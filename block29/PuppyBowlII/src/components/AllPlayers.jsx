import { React, useState } from "react";
import Player from "./Player";
import Popup from "./Popup";
import { removePlayer } from "../API";

export default function AllPlayers({ allPlayers }) {
  const [playerId, setPlayerId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  //toggles player details pop-up open and close
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  //handles remove button, removes a player when clicked
  const handleRemove = async (id) => {
    try {
      const response = await removePlayer(id);
      const result = await response.json();
      console.log(result);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

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
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              name={player.name}
              breed={player.breed}
              imageUrl={player.imageUrl}
              handleRemove={handleRemove}
            />
          );
        })}
      </div>
      {/*if isOpen is true, the player details pop up displays*/}
      {isOpen && (
        <Popup
          playerId={playerId}
          handleClose={togglePopup}
          handleRemove={handleRemove}
        />
      )}
    </>
  );
}
