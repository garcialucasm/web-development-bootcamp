function Note(props) {
  const content = (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
  return content;
}

export default Note;
