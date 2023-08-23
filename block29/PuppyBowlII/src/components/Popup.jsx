import React from "react";
import PlayerDetails from "./PlayerDetails";

export default function Popup({ playerId, handleClose, handleRemove }) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <PlayerDetails playerId={playerId} handleRemove={handleRemove} />
      </div>
    </div>
  );
}
