import React, { useState } from "react";

function Events() {
  // Part I
  const clickMe = () => {
    alert("I was clicked");
  };

  // Part II
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`You typed: ${event.target.value}`);
    }
  };

  // Part III
  const [isToggleOn, setIsToggleOn] = useState(true);
  const toggle = () => setIsToggleOn(!isToggleOn);

  return (
    <div>
      {/* Part I */}
      <button onClick={clickMe}>Click Me</button>

      {/* Part II */}
      <br /><br />
      <input type="text" onKeyDown={handleKeyDown} placeholder="Type and press Enter" />

      {/* Part III */}
      <br /><br />
      <button onClick={toggle}>{isToggleOn ? "ON" : "OFF"}</button>
    </div>
  );
}

export default Events;
