const db = require("../config/db");

const Blog = {
  getAll: () => db("posts").select("*"),
  getById: (id) => db("posts").where({ id }).first(),
  create: (post) => db("posts").insert(post).returning("*"),
  update: (id, post) => db("posts").where({ id }).update(post).returning("*"),
  delete: (id) => db("posts").where({ id }).del()
};

module.exports = Blog;
