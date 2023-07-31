import { React, useState } from "react";
import SignUpForm from "./components/SignUpForm";
import Authentication from "./components/Authentication";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authentication token={token} />
    </>
  );
}
