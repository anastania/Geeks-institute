// app.js
const { readFile, writeFile } = require("./fileManager");

const content = readFile("Hello World.txt");
console.log("Content of Hello World.txt:", content);

writeFile("Bye World.txt", "Writing to the file");
console.log("Updated Bye World.txt successfully!");
