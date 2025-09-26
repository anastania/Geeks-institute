const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// importer les routes
const quizRoutes = require("./routes/quiz");

// utiliser les routes
app.use("/quiz", quizRoutes);

app.listen(PORT, () => {
  console.log(`Trivia Quiz running at http://localhost:${PORT}`);
});
