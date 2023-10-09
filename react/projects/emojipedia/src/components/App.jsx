import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmoji(emojipedia) {
  return (
    <Entry
      id={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

// const arrayOfMeaningsSubstring = emojipedia.map(function (emojiEntry) {
//   return emojiEntry.meaning.substring(0,100);
// });

const arrayOfMeaningsSubstring = emojipedia.map((emojiEntry) =>
  emojiEntry.meaning.substring(0, 100)
);

console.log(arrayOfMeaningsSubstring);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
