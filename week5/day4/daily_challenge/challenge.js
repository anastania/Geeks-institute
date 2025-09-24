const greet = require("./greeting");
const showMessage = require("./colorful-message");
const readFile = require("./read-file");

console.log("=== Daily Challenge ===\n");

console.log(greet("Anas"));
console.log("\n--- Colorful Message ---");
showMessage();
console.log("\n--- File Content ---");
readFile();
