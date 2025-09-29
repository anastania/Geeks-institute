const Blog = require("../models/blogModel");

exports.getPosts = async (req, res) => {
  try {
    const posts = await Blog.getAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Blog.getById(req.params.id);
    post ? res.json(post) : res.status(404).json({ msg: "Not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const [newPost] = await Blog.create(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const [updated] = await Blog.update(req.params.id, req.body);
    updated ? res.json(updated) : res.status(404).json({ msg: "Not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deleted = await Blog.delete(req.params.id);
    deleted ? res.json({ msg: "Deleted" }) : res.status(404).json({ msg: "Not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
