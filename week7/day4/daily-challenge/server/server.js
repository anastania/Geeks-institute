// server/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// ✅ Part I - GET route
app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello From Express" });
});

// ✅ Part II - POST route
app.post("/api/world", (req, res) => {
  console.log("Received from client:", req.body);

  const userInput = req.body.inputValue;
  res.send({
    message: `I received your POST request. This is what you sent me: ${userInput}`,
  });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
