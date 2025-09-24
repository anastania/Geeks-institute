// shop.js
const products = require("./products");

function findProduct(productName) {
  return products.find(p => p.name.toLowerCase() === productName.toLowerCase());
}

console.log(findProduct("Laptop"));
console.log(findProduct("Phone"));
console.log(findProduct("Book"));
