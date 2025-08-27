
// Exercise 1:
console.log("=== Exercise 1: Random Number ===");

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", randomNumber);

for (let i = 0; i <= randomNumber; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Exercise 2: 
console.log("\n=== Exercise 2: Capitalized Letters ===");

function capitalize(str) {
  let evenCaps = "";
  let oddCaps = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      evenCaps += str[i].toUpperCase();
      oddCaps += str[i];
    } else {
      evenCaps += str[i];
      oddCaps += str[i].toUpperCase();
    }
  }

  return [evenCaps, oddCaps];
}

console.log(capitalize("abcdef")); 
// Exercise 3:
console.log("\n=== Exercise 3: Palindrome ===");

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log("madam:", isPalindrome("madam"));
console.log("hello:", isPalindrome("hello")); 
// Exercise 4:  
console.log("\n=== Exercise 4: Biggest Number ===");

function biggestNumberInArray(arrayNumber) {
  let numbersOnly = arrayNumber.filter(item => typeof item === "number");
  if (numbersOnly.length === 0) return 0;
  return Math.max(...numbersOnly);
}

const array1 = [-1, 0, 3, 100, 99, 2, 99];
const array2 = ['a', 3, 4, 2];
const array3 = [];

console.log(biggestNumberInArray(array1)); 
console.log(biggestNumberInArray(array2));
console.log(biggestNumberInArray(array3)); 
// Exercise 5:
console.log("\n=== Exercise 5: Unique Elements ===");

function uniqueElements(arr) {
  return [...new Set(arr)];
}

let list = [1, 2, 3, 3, 3, 3, 4, 5];
console.log(uniqueElements(list)); 
// Exercise 6: 
console.log("\n=== Exercise 6: Calendar ===");

function createCalendar(year, month) {
  let date = new Date(year, month - 1);
  let days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

  // Print header
  console.log(days.join(" "));

  // Start from Monday
  let offset = (date.getDay() + 6) % 7;
  let output = "";

  // Print empty slots before first day
  for (let i = 0; i < offset; i++) {
    output += " . ";
  }

  while (date.getMonth() === month - 1) {
    let day = date.getDate();
    output += (day < 10 ? " " + day : day) + " ";

    if ((date.getDay() + 6) % 7 === 6) {
      console.log(output.trim());
      output = "";
    }

    date.setDate(date.getDate() + 1);
  }

  if (output !== "") {
    console.log(output.trim());
  }
}

// Example
createCalendar(2012, 9);
