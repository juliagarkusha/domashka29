function Name (props) {
  const {
    name,
    onNameChange,
  } = props;

  return(
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

export default Name;

