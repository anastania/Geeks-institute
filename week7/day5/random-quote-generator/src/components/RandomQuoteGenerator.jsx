// src/components/RandomQuoteGenerator.jsx

import React, { useState } from "react";
import quotes from "./quotes";

const RandomQuoteGenerator = () => {
  // Function to pick a random index
  const getRandomIndex = (exclude) => {
    let index;
    do {
      index = Math.floor(Math.random() * quotes.length);
    } while (index === exclude);
    return index;
  };

  // Function to pick a random color
  const randomColor = () => {
    const colors = ["#82D4E8", "#3D86CB", "#BAD0F3", "#284D9C", "#2A3045", "#CFE4FB"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // State for the quote index and color
  const [index, setIndex] = useState(getRandomIndex());
  const [color, setColor] = useState(randomColor());

  // Function to generate a new quote and color
  const handleNewQuote = () => {
    const newIndex = getRandomIndex(index);
    setIndex(newIndex);
    setColor(randomColor());
  };

  // Get current quote data
  const { text, author } = quotes[index];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center transition-all duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white text-center p-8 rounded-2xl shadow-lg max-w-lg">
        <h1 className="text-2xl font-bold mb-4" style={{ color }}>
          “{text}”
        </h1>
        <p className="text-gray-600 mb-6">— {author}</p>
        <button
          onClick={handleNewQuote}
          className="px-4 py-2 rounded-xl text-white font-semibold transition-all duration-300"
          style={{ backgroundColor: color }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default RandomQuoteGenerator;
