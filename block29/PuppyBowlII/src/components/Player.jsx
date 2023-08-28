export default function Player({
  id,
  setPlayerId,
  name,
  breed,
  imageUrl,
  handleRemove,
  togglePopup,
}) {
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
