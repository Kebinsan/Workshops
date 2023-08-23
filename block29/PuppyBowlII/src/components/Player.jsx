import { React } from "react";

export default function Player({
  id,
  setPlayerId,
  isOpen,
  setIsOpen,
  name,
  breed,
  imageUrl,
  handleRemove,
}) {
  //toggles player details pop-up open and close
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  //see details button handler
  const handleSeeDetails = () => {
    setPlayerId(id);
    togglePopup();
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
      <button className="details-button" onClick={handleSeeDetails}>
        See Details
      </button>
      <button className="remove-button" onClick={() => handleRemove(id)}>
        Remove
      </button>
    </div>
  );
}
