import { useState, useEffect } from "react";
import Player from "./Player";
import PlayerDetails from "./PlayerDetails";

export default function AllPlayers({
  allPlayers,
  isOpen,
  togglePopup,
  handleRemove,
}) {
  const [playerId, setPlayerId] = useState("");
  const [query, setQuery] = useState("");
  const [searchedPlayers, setSearchedPlayers] = useState([]);

  /**
   * search query that filters allplayers
   */
  useEffect(() => {
    console.log(query);
    setSearchedPlayers(
      allPlayers.filter((entry) =>
        Object.values(entry).some(
          (val) => typeof val === "string" && val.includes(query)
        )
      )
    );
    console.log(searchedPlayers);
  }, [query]);

  return (
    <>
      <h1 className="page-header">Roster</h1>
      <div className="search-container">
        <form className="search-Form">
          <h3 className="search-header">Search Players</h3>
          <input
            id="search"
            className="search"
            type="text"
            placeholder="Search..."
            onChange={(event) => setQuery(event.target.value)}
          />
          {/*clears search query results*/}
          <button
            className="btn-clear"
            onClick={() => {
              setSearchedPlayers([]);
            }}
          >
            clear
          </button>
        </form>
      </div>
      <div id="all-players-container">
        {/*If the array of searched players is not empty, displays the filtered players based on search. Otherwise display all players*/}
        {searchedPlayers.length
          ? searchedPlayers.map((player) => {
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
            })
          : allPlayers.map((player) => {
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
