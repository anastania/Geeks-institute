import React, { useState } from "react";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  // function to handle voting
  const handleVote = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Voting App</h1>
      {languages.map((lang, index) => (
        <div key={lang.name} style={{ margin: "15px" }}>
          <span style={{ fontSize: "18px", marginRight: "15px" }}>
            {lang.name}: {lang.votes} votes
          </span>
          <button onClick={() => handleVote(index)}>Vote</button>
        </div>
      ))}
    </div>
  );
}

export default App;
