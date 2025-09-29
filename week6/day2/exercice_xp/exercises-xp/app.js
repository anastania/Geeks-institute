const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Import des routes
const indexRoutes = require("./routes/index");
const todosRoutes = require("./routes/todos");
const booksRoutes = require("./routes/books");

// Montage des routes
app.use("/", indexRoutes);
app.use("/todos", todosRoutes);
app.use("/books", booksRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
