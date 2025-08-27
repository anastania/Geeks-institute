//  Exercise 1 : List of people
const people = ["Greg", "Mary", "Devon", "James"];

people.shift();
people[2] = "Jason";
people.push("Anas");
console.log(people.indexOf("Mary"));
const peopleCopy = people.slice(1, 3);
console.log(people.indexOf("Foo"));
const last = people[people.length - 1];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") break;
}
console.log("-----------------------------------------------------------------------")

//  Exercise 2 : Your favorite colors
const colors = ["Blue", "Red", "Green", "Black", "White"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

const suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("-----------------------------------------------------------------------")

// ---- Exercise 3 
function askNumber() {
  rl.question("Enter a number 10 or greater: ", (input) => {
    const number = parseInt(input, 10);

    if (number < 10 || isNaN(number)) {
      console.log("❌ Please enter a valid number 10 or greater.");
      askNumber(); 
    } else {
      console.log("✅ Thanks! You entered:", number);
        console.log("-----------------------------------------------------------------------")

      runExercises();
      rl.close();
    }
  });
}

askNumber(); // start program

function runExercises() {
  // Exercise 4 : Building Management
  const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
      sarah: [3, 990],
      dan: [4, 1000],
      david: [1, 500],
    },
  };

  console.log(building.numberOfFloors);
  console.log(
    building.numberOfAptByFloor.firstFloor,
    building.numberOfAptByFloor.thirdFloor
  );
  console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);

  if (
    building.numberOfRoomsAndRent.sarah[1] +
      building.numberOfRoomsAndRent.david[1] >
    building.numberOfRoomsAndRent.dan[1]
  ) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
  }
console.log("-----------------------------------------------------------------------")
  // Exercise 5 : Family
  const family = {
    father: "Ahmed",
    mother: "Amina",
    son: "Youssef",
    daughter: "Sara",
  };

  for (let key in family) {
    console.log(key);
  }

  for (let key in family) {
    console.log(family[key]);
  }
console.log("-----------------------------------------------------------------------")

  // Exercise 6 : Rudolf
  const details = {
    my: "name",
    is: "Rudolf",
    the: "reindeer",
  };

  let sentence = "";
  for (let key in details) {
    sentence += key + " " + details[key] + " ";
  }
  console.log(sentence.trim());
console.log("-----------------------------------------------------------------------")

  // Exercise 7 : Secret Group
  const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

  const secretName = names.map((n) => n[0]).sort().join("");
  console.log(secretName);
}