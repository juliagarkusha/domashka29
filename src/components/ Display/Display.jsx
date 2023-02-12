function Display (props) {
  const {
    name,
    animal
  } = props;

  return (
    <div>{`Эй ${name}, твое любимое животное: ${animal}!`}</div>
  )
}

export default Display;
