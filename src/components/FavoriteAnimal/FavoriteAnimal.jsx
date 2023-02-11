function FavoriteAnimal (props) {
  const {
    animal,
    onAnimalChange,
  } = props;

  return(
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

export default FavoriteAnimal;
