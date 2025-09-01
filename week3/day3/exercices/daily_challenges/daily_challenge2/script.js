// Select the input
const input = document.getElementById("lettersOnly");

// Listen for input event
input.addEventListener("input", function () {
  // Replace anything that is NOT a letter (a-z, A-Z) with empty string
  this.value = this.value.replace(/[^a-zA-Z]/g, "");
});
