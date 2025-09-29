const express = require("express");
const app = express();

app.use(express.json());

// Routes
app.use("/api", require("./server/routes/userRoutes"));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
