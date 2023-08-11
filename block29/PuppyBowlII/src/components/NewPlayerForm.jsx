import { React, useState } from "react";
import { addNewPlayer } from "../API";

export default function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png"
  );
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        addNewPlayer({ name, breed, status, imageUrl })
      );
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div id="new-player-form">
      {error && <p>{error}</p>}
      <form id="new-player" onSubmit={handleSubmit}>
        <h2>Add New Player</h2>
        <label>
          Name: {""}
          <input
            name="name"
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label>
          Breed: {""}
          <input
            name="breed"
            onChange={(event) => setBreed(event.target.value)}
            required
          />
        </label>
        <label>
          Status: {""}
          <select
            id="status"
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
              name="imageUrl"
              onChange={(event) => setImageUrl(event.target.value)}
            ></input>
          </label>
        </div>
        <button className="submit-button">submit</button>
      </form>{" "}
      {""}
    </div>
  );
}
