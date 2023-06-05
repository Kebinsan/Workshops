const newPartyForm = document.querySelector("#new-party-form");
const partyContainer = document.querySelector("#party-container");

const PARTIES_API_URL =
  "http://fsa-async-await.herokuapp.com/api/workshop/parties";
const GUESTS_API_URL =
  "http://fsa-async-await.herokuapp.com/api/workshop/guests";
const RSVPS_API_URL = "http://fsa-async-await.herokuapp.com/api/workshop/rsvps";
//const GIFTS_API_URL = 'http://fsa-async-await.herokuapp.com/api/workshop/gifts';

// get all parties
const getAllParties = async () => {
  try {
    const response = await fetch(PARTIES_API_URL);
    const parties = await response.json();
    return parties;
  } catch (error) {
    console.error(error);
  }
};

// get single party by id
const getPartyById = async (id) => {
  try {
    const response = await fetch(`${PARTIES_API_URL}/${id}`);
    const party = await response.json();
    return party;
  } catch (error) {
    console.error(error);
  }
};

// delete party
const deleteParty = async (id) => {
  try {
    const response = await fetch(`${PARTIES_API_URL}/${id}`, {
      method: "DELETE",
    });
    const party = await response.json();
    console.log(party);
    getAllParties();

    window.location.reload();
  } catch (error) {
    console.error(error);
  }
};

// render a single party by id, renders single party details directly below party info
const renderSinglePartyById = async (id, partyElement) => {
  try {
    // fetch party details from server, no longer using
    const party = await getPartyById(id);

    // GET - /api/workshop/guests/party/:partyId - get guests by party id
    const guestsResponse = await fetch(`${GUESTS_API_URL}/party/${id}`);
    const guests = await guestsResponse.json();

    // GET - /api/workshop/rsvps/party/:partyId - get RSVPs by partyId
    const rsvpsResponse = await fetch(`${RSVPS_API_URL}/party/${id}`);
    const rsvps = await rsvpsResponse.json();

    // GET - get all gifts by party id - /api/workshop/parties/gifts/:partyId -BUGGY?
    //const giftsResponse = await fetch(`${PARTIES_API_URL}/party/gifts/${id}`);
    //const gifts = await giftsResponse.json();

    // create new HTML element to display party details
    //removed party info as it is already showing in the parent
    const partyDetailsElement = document.createElement("div");
    partyDetailsElement.classList.add("party-details");
    /*
    removed the party details as it would present that data a second time in the container
    would've previously had to change the undefined properties to what is shown on the api
    ex: party.title -> party.name, remove party.state since its not used, etc
    */
    partyDetailsElement.innerHTML = `
            <h3 class="guests-header">Guests:</h3>
            <ul>
            ${guests
              .map(
                (guest, index) => `
              <li>
                <div class="guest">${guest.name}</div>
                <div class="rsvp-status">${rsvps[index].status}</div>
              </li>
            `
              )
              .join("")}
          </ul>
          


            <button class="close-button">Close</button>
        `;
    //appending party details to the party element to make it a child of the parent party element
    partyElement.appendChild(partyDetailsElement);

    // add event listener to close button
    const closeButton = partyDetailsElement.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
      partyDetailsElement.remove();
    });
  } catch (error) {
    console.error(error);
  }
};

// render all parties
const renderParties = async (parties) => {
  try {
    partyContainer.innerHTML = "";
    parties.forEach((party) => {
      const partyElement = document.createElement("div");
      partyElement.classList.add("party");
      partyElement.innerHTML = `
                <h2>${party.name}</h2>
                <p>${party.description}</p>
                <p>${party.date}</p>
                <p>${party.time}</p>
                <p>${party.location}</p>
                <button class="details-button" data-id="${party.id}">See Details</button>
                <button class="delete-button" data-id="${party.id}">Delete</button>
            `;
      //moved details button here so that I can show details below party info, party details will be appended to this party element
      const detailsButton = partyElement.querySelector(".details-button");
      detailsButton.addEventListener("click", async (event) => {
        renderSinglePartyById(party.id, partyElement);
      });

      partyContainer.appendChild(partyElement);
      // see details

      // delete party
      const deleteButton = partyElement.querySelector(".delete-button");
      deleteButton.addEventListener("click", async (event) => {
        deleteParty(party.id);
      });
    });
  } catch (error) {
    console.error(error);
  }
};

// init function
const init = async () => {
  const parties = await getAllParties();
  renderParties(parties);
};

init();
