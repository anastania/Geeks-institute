const express = require("express");
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

// Game state (reset when server restarts)
let currentIndex = 0;
let score = 0;

// Start the quiz (first question)
router.get("/", (req, res) => {
  if (currentIndex >= triviaQuestions.length) {
    return res.json({ message: "Quiz finished! Go to /quiz/score" });
  }
  res.json({
    questionNumber: currentIndex + 1,
    question: triviaQuestions[currentIndex].question,
  });
});

// Submit an answer
router.post("/", (req, res) => {
  if (currentIndex >= triviaQuestions.length) {
    return res.json({ message: "Quiz already finished! Go to /quiz/score" });
  }

  const userAnswer = req.body.answer;
  const correctAnswer = triviaQuestions[currentIndex].answer;

  let feedback;
  if (userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    feedback = "Correct!";
  } else {
    feedback = `Incorrect! The right answer was "${correctAnswer}".`;
  }

  currentIndex++;

  if (currentIndex < triviaQuestions.length) {
    res.json({
      feedback,
      nextQuestion: triviaQuestions[currentIndex].question,
    });
  } else {
    res.json({
      feedback,
      message: "Quiz completed! Visit /quiz/score for your final score.",
    });
  }
});

// Get final score
router.get("/score", (req, res) => {
  res.json({
    score,
    total: triviaQuestions.length,
    message: "Thanks for playing the Trivia Quiz Game!",
  });

  // Reset game state for next player
  currentIndex = 0;
  score = 0;
});

module.exports = router;
