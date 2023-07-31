import { React, useState } from "react";

export default function Authentication({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);
      setSuccessMessage(
        result.message + " Welcome " + result.data.username + "!"
      );
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h1>Authentication</h1>
      <button className="auth-button" onClick={handleClick}>
        Authenticate Token
      </button>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
    </>
  );
}
