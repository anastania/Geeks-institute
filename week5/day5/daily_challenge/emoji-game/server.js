
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "⚽", name: "Football" },
  { emoji: "🎵", name: "Music" },
  { emoji: "🐱", name: "Cat" },
];

let leaderboard = [];

// 🎲 Utility: get random emoji + options
function getRandomQuestion() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  let options = [correct.name];

  while (options.length < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(random)) {
      options.push(random);
    }
  }

  // Shuffle
  options = options.sort(() => Math.random() - 0.5);

  return { emoji: correct.emoji, correct: correct.name, options };
}

// 👉 Get new question
app.get("/api/question", (req, res) => {
  res.json(getRandomQuestion());
});

// 👉 Submit answer
app.post("/api/guess", (req, res) => {
  const { guess, correct, player } = req.body;
  const isCorrect = guess === correct;

  // Update leaderboard
  if (player) {
    let entry = leaderboard.find((p) => p.name === player);
    if (!entry) {
      entry = { name: player, score: 0 };
      leaderboard.push(entry);
    }
    if (isCorrect) entry.score++;
  }

  res.json({ isCorrect });
});

// 👉 Get leaderboard
app.get("/api/leaderboard", (req, res) => {
  const sorted = [...leaderboard].sort((a, b) => b.score - a.score);
  res.json(sorted.slice(0, 5)); // top 5
});

app.listen(PORT, () => {
  console.log(`Emoji Game running at http://localhost:${PORT}`);
});
