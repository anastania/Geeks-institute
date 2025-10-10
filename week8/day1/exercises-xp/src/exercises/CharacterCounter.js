import React, { useRef, useState } from "react";

const CharacterCounter = () => {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setCount(inputRef.current.value.length);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <input
        type="text"
        ref={inputRef}
        onInput={handleChange}
        placeholder="Type something..."
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
      <p>Character count: {count}</p>
    </div>
  );
};

export default CharacterCounter;
