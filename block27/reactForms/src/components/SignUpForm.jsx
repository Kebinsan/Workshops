import { React, useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          body: JSON.stringify(username, password),
        }
      );
      const result = await response.json();
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  function FormValidation() {
    const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
    const message = "";
    if (!usernameRegex.test(username)) {
      message +=
        "invalid username. Username should be 4 to 16 characters long and can only contain letters, numbers, underscores, and hyphens.";
    }
    if (!passwordRegex.test(password)) {
      message +=
        "Invalid password. Password should be at least 8 characters long and contain at least one letter and one number.";
    }
    if (message === "") {
      return true;
    } else {
      setError(message);
      return false;
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
        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>submit</button>
      </form>{" "}
    </>
  );
}
