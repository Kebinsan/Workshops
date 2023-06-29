import { useState } from "react";
import "./style.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      <div className="puppies">
        {puppies.map((puppy) => {
          return (
            <p
              className="puppy-name"
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
      </div>
      {featPupId && (
        <div className="feat-pup">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
