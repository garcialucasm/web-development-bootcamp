import notes from "../notes";
import "./App.css";
import Note from "./Note";

function App() {
  return (
    <div>
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
    </div>
  );
}

export default App;
