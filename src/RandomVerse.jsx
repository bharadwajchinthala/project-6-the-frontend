import { useState } from "react";

function RandomVerse() {
  const [verse, setVerse] = useState("");

  const fetchRandomVerse = async () => {
    try {
      const response = await fetch(
        "https://labs.bible.org/api/?passage=random&type=text"
      );
      const text = await response.text();
      setVerse(text);
    } catch (error) {
      setVerse("Error fetching verse.");
    }
  };

  return (
    <div className="card">
      <h2>Random Verse</h2>
      <button onClick={fetchRandomVerse}>Get Random Verse</button>
      <p>{verse}</p>
    </div>
  );
}

export default RandomVerse;
