import { useEffect, useState } from "react";
import { fetchSinglePlayer } from "../API";

export default function PlayerDetails({
  playerId,
  togglePopup,
  handleRemove,
  isNewPlayer,
}) {
  const [player, setPlayer] = useState(null);

  //gets a player with playerid passed to playerDetails from see details onclick in player component
  useEffect(() => {
    const getPlayer = async () => {
      try {
        const result = await fetchSinglePlayer(playerId);
        setPlayer(result);
      } catch (error) {
        console.error(error);
      }
    };
    getPlayer();
  }, []);

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={togglePopup}>
          x
        </span>
        <div className="player-details">
          {/*ensure player exists from fetch before attempting to display data*/}
          {player && (
            <>
              <img
                className="player-img"
                src={player.imageUrl}
                alt="Unable to find image of player"
              ></img>
              <div className="details-text">
                <div>
                  {isNewPlayer && (
                    <>
                      <h2>{player.name} has been added to the roster!</h2>
                      <br />
                    </>
                  )}
                  <h2>{player.name}</h2>
                  <h3>{player.breed}</h3>
                  <p>
                    <b>Player Status: </b> {player.status}
                  </p>
                  {/*if player is on a team, display team details*/}
                  {player.team && (
                    <>
                      <h3 className="team">Team: {player.team.name}</h3>
                      <p>
                        <b>Number of players:</b> {player.team.players.length}
                      </p>
                      <p className="score">
                        <b>Score:</b> {player.team.score}
                      </p>
                    </>
                  )}
                  {/*displays undo button if its for a new added player, otherwise display remove*/}
                  {isNewPlayer ? (
                    <button
                      className="remove-button details-btn"
                      onClick={() => {
                        handleRemove(playerId);
                      }}
                    >
                      Undo
                    </button>
                  ) : (
                    <button
                      className="remove-button details-btn"
                      onClick={() => {
                        handleRemove(playerId);
                      }}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
