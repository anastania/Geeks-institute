// Part I: Alert after 2 seconds
setTimeout(function () {
  alert("Hello World");
}, 2000);

// Part II: Add paragraph after 2 seconds
setTimeout(function () {
  let container = document.getElementById("container");
  let p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);
}, 2000);

// Part III: Add paragraph every 2 seconds
let count = 0;
let interval = setInterval(function () {
  let container = document.getElementById("container");
  let p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);
  count++;

  // Stop at 5 paragraphs
  if (count === 5) {
    clearInterval(interval);
  }
}, 2000);

// Stop when button clicked
document.getElementById("clear").addEventListener("click", function () {
  clearInterval(interval);
});
