import { useState } from "react";
import { addNewPlayer } from "../API";
import PlayerDetails from "./PlayerDetails";
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm({
  isOpen,
  togglePopup,
  handleRemove,
  setIsOpen,
  setAllPlayers,
  allPlayers,
  setIsNewPlayer,
  isNewPlayer,
}) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png"
  );
  const [newPlayer, setNewPlayer] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //submits a new player based on form entry, handles submit button
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await addNewPlayer({
        name,
        breed,
        status,
        imageUrl,
      });
      setIsNewPlayer(true);
      setNewPlayer(result);
      setAllPlayers([...allPlayers, newPlayer]);
      togglePopup();
      setTimeout(() => {
        setIsOpen(false);
        navigate("/roster");
      }, 1800);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div id="new-player-form">
        {/*displays error message if there was an error submitting new player*/}
        {error && <p>{error}</p>}
        <form id="new-player" onSubmit={handleSubmit}>
          <h1 className="page-header">Add New Player</h1>
          <label>
            Name: {""}
            <input
              className="form-element"
              name="name"
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>
          <label>
            Breed: {""}
            <input
              className="form-element"
              name="breed"
              onChange={(event) => setBreed(event.target.value)}
              required
            />
          </label>
          <label>
            Status: {""}
            <select
              className="form-element"
              name="name"
              size="2"
              onChange={(event) => setStatus(event.target.value)}
              required
            >
              <option value="bench">Bench</option>
              <option value="field">Field</option>
            </select>
          </label>
          <div className="imageUrl">
            <label>
              Image: {""}
              <input
                className="form-element"
                name="imageUrl"
                onChange={(event) => setImageUrl(event.target.value)}
              ></input>
            </label>
          </div>
          <div>
            <button className="submit-button">submit</button>
          </div>
        </form>
      </div>
      {isOpen && newPlayer && (
        <PlayerDetails
          playerId={newPlayer.id}
          togglePopup={togglePopup}
          handleRemove={handleRemove}
          isNewPlayer={true}
        />
      )}
    </>
  );
}
