const COHORT_URL = "2302-ACC-ET-WEB-PT-B";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_URL}`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}/players`);
    const result = await response.json();
    console.log(result.data.players);
    return result.data.players;
  } catch (err) {
    console.error("Error fetching All Players!", err);
  }
};

/**
 * It fetches a single player from the API using the player id and returns them
 * @returns An object.
 */
export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`);
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.error(`Error fetching player #${playerId}!`, error);
  }
};
/**
 * It adds new player to the API by taking a player object and returns them
 * @returns An Object.
 */
export const addNewPlayer = async (playerObj) => {
  try {
    const response = await fetch(`${APIURL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerObj),
    });
    const result = await response.json();
    console.log(result.data.newPlayer);

    return result.data.newPlayer;
  } catch (error) {
    console.error(
      "Error, something went wrong with adding that player!",
      error
    );
  }
};
/**
 * It removes new player from the API using the player id and returns them
 * @returns An Object.
 */
export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(
      `Error, trouble removing player #${playerId} from the roster!`,
      error
    );
  }
};
