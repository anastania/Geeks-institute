
// Exercise 1 : Divisible by three
let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Exercise 2 : Attendance
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", function(name) {
  name = name.toLowerCase(); 

  if (guestList[name]) {
    console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`);
  } else {
    console.log("Hi! I'm a guest.");
  }

  // Exercise 3 
  let age = [20, 5, 12, 43, 98, 55];

  let sum = 0;
  for (let i = 0; i < age.length; i++) {
    sum += age[i];
  }
  console.log("Sum of all ages:", sum);

  let highest = age[0];
  for (let i = 1; i < age.length; i++) {
    if (age[i] > highest) {
      highest = age[i];
    }
  }
  console.log("Highest age:", highest);

  rl.close(); 
});
