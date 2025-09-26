const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Fake DB
let posts = [
  { id: 1, title: "First Post", content: "Hello World!" },
  { id: 2, title: "Second Post", content: "Learning Express.js!" },
];

// GET all posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// GET post by id
app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
});

// CREATE post
app.post("/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
})

// UPDATE post
app.put("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: "Post not found" });

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  res.json(post);
});

// DELETE post
app.delete("/posts/:id", (req, res) => {
  posts = posts.filter((p) => p.id !== parseInt(req.params.id));
  res.json({ message: "Post deleted" });
});

// Error handling
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Blog API running on http://localhost:${PORT}`);
});
