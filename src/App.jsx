import RandomVerse from "./RandomVerse.jsx";
import SpecificVerse from "./SpecificVerse.jsx";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Bible Verse Finder</h1>
      <RandomVerse />
      <SpecificVerse />
    </div>
  );
}

export default App;
