import React from "react";
import { removePlayer } from "../API";

export default function Player({ id, name, breed, imageUrl }) {
  const handleRemove = async () => {
    try {
      const response = await removePlayer(id);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="player">
      <h2>{name} </h2>
      <h3>{breed}</h3>
      <img
        className="player-img"
        src={imageUrl}
        alt="Unable to find image of player"
      ></img>
      <button
        className="details-button"
        onClick={() => {
          console.log("details clicked");
        }}
      >
        See Details
      </button>
      <button className="remove-button" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}
