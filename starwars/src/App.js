import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'

const App = () => {
  const swAPIurl = 'https://swapi.dev/api/people';

  let [characterState, setcharacterState] = useState([]);
  

  useEffect( () => {
      axios.get(swAPIurl)
      .then(response => {
        console.log('First', response.data);
        setcharacterState(response.data.results);
        }
      )       
      .catch(error => {console.log(error)})
    },
  [])

  
  return (
    <div className="App">
     <h1 className="Header">Characters</h1>
     { 
     characterState.map(character => (
       <div className="List">
         <Character name={character.name} key={character.name} homeworld={character.homeworld} />
      </div>
     )
     )
     }
      
    </div>
  );
}

export default App;
