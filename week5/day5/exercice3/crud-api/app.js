import express from "express";
const { fetchPosts } = require("./data/dataService");
const app = express();
const PORT = 5000;

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("Data fetched successfully!");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

app.listen(PORT, () => {
  console.log(`CRUD API running on http://localhost:${PORT}`);
});
