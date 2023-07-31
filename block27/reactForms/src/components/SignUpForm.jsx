import { React, useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (FormValidation()) {
      try {
        const response = await fetch(
          "https://fsa-jwt-practice.herokuapp.com/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password }),
          }
        );
        const result = await response.json();
        setToken(result.token);
      } catch (error) {
        setError(error.message);
      }
    }
  }

  /*validates the username and password. Username and password cannot be empty. username must be between
  6 and 18 characters in length. Password must be greater than 8 characters.
  */
  function FormValidation() {
    let message = "";
    if (!username) {
      message += "username cannot be empty. ";
    } else if (username.length < 6 || username.length > 18) {
      message += "Username must have between 6 and 18 characters. ";
    }
    if (!password) {
      message += "password cannot be empty. ";
    } else if (password.length < 8) {
      message += "Password must be at least 8 characters long. ";
    }
    if (message) {
      setError(message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return (
    <>
      <h1>Sign up</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br></br>
        <button className="submit-button">submit</button>
      </form>{" "}
    </>
  );
}
