let currentQuestion = null;
let playerName = prompt("Enter your name:");

async function loadQuestion() {
  const res = await fetch("/api/question");
  currentQuestion = await res.json();

  document.getElementById("emoji").textContent = currentQuestion.emoji;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  currentQuestion.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => makeGuess(opt);
    optionsDiv.appendChild(btn);
  });
}

async function makeGuess(choice) {
  const res = await fetch("/api/guess", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      guess: choice,
      correct: currentQuestion.correct,
      player: playerName,
    }),
  });

  const result = await res.json();
  document.getElementById("feedback").textContent = result.isCorrect
    ? "✅ Correct!"
    : `❌ Wrong! The answer was ${currentQuestion.correct}`;

  loadLeaderboard();
  setTimeout(loadQuestion, 1000);
}

async function loadLeaderboard() {
  const res = await fetch("/api/leaderboard");
  const leaderboard = await res.json();

  const list = document.getElementById("leaderboard");
  list.innerHTML = "";
  leaderboard.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.name}: ${entry.score}`;
    list.appendChild(li);
  });
}

// Init
loadQuestion();
loadLeaderboard();
