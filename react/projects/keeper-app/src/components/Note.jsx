/* eslint-disable react/prop-types */
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  const content = (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
  return content;
}

export default Note;
