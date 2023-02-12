import React, { useState, useEffect } from "react";
import FavoriteAnimal from "./components/FavoriteAnimal";
import Display from "./components/ Display";
import './App.scss';

function App() {
  const [animal, setAnimal] = useState('');

  useEffect(() => {
    document.title = 'Domashka29';
  }, []);

  return (
    <form>
      <FavoriteAnimal
        animal={animal}
        onAnimalChange={event => setAnimal(event.target.value)}
      />
      <Display animal={animal} />
    </form>
  );
}

export default App;
