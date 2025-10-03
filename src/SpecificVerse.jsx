import { useState } from "react";

function SpecificVerse() {
  const [reference, setReference] = useState("John 3:16");
  const [verse, setVerse] = useState("");

  const fetchVerse = async () => {
    try {
      const response = await fetch(
        `https://labs.bible.org/api/?passage=${encodeURIComponent(reference)}&type=text`
      );
      const text = await response.text();
      setVerse(text);
    } catch (error) {
      setVerse("Error fetching verse.");
    }
  };

  return (
    <div className="card">
      <h2>Find a Verse</h2>
      <input
        type="text"
        value={reference}
        onChange={(e) => setReference(e.target.value)}
        placeholder="Enter verse (e.g., John 3:16)"
      />
      <button onClick={fetchVerse}>Get Verse</button>
      <p>{verse}</p>
    </div>
  );
}

export default SpecificVerse;
