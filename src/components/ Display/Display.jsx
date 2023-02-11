function Display (props) {
  const {
    animal
  } = props;

  return (
    <div>{`Ваше любимое животное: ${animal}!`}</div>
  )
}

export default Display;
