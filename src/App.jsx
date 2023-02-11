import React, { useState, useEffect } from "react";
import Name from "./components/Name";
import FavoriteAnimal from "./components/FavoriteAnimal";
import Display from "./components/ Display";
import './App.scss';

function App() {
  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');

  useEffect(() => {
    document.title = 'Domashka29';
  }, []);

  return (
    <form>
      <Name
        name={name}
        onNameChange={event => setName(event.target.value)}
      />
      <FavoriteAnimal
        animal={animal}
        onAnimalChange={event => setAnimal(event.target.value)}
      />
      <Display
        name={name}
        animal={animal}
      />
    </form>
  );
}

export default App;
