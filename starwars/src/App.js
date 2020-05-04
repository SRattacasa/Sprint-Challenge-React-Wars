import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  const swAPIurl = "https://swapi.dev/api/people";

  let [characterState, setcharacterState] = useState([]);

  useEffect(() => {
    axios
      .get(swAPIurl)
      .then((response) => {
        console.log("First", response.data);
        setcharacterState(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      
      <div className="CharList">
        {characterState.map((character) => (
          <div className="Character">
            <Character
              name={character.name}
              key={character.name}
              homeworld={character.homeworld}
              mass={character.mass}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
