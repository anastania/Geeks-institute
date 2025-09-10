//  Exercise 1
const colors1 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors1.forEach((c,i)=>console.log(`${i+1}# choice is ${c}.`));
console.log(colors1.includes("Violet") ? "Yeah" : "No...");

//  Exercise 2
const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
colors2.forEach((c,i)=>{
  let ord = (i+1) === 1 ? "st" : (i+1) === 2 ? "nd" : (i+1) === 3 ? "rd" : "th";
  console.log(`${i+1}${ord} choice is ${c}.`);
});

//  Exercise 3
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // ["bread","carrot","potato","chicken","apple","orange"]

const country = "USA";
console.log([...country]); // ["U","S","A"]

let newArray = [...[,,]];
console.log(newArray); // [undefined, undefined]

//  Exercise 4
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

const welcomeStudents = users.map(u=>`Hello ${u.firstName}`);
console.log(welcomeStudents);

const fullStack = users.filter(u=>u.role === "Full Stack Resident");
console.log(fullStack);

const lastNames = users.filter(u=>u.role === "Full Stack Resident").map(u=>u.lastName);
console.log(lastNames);

//  Exercise 5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const story = epic.reduce((acc,word)=>acc + " " + word);
console.log(story);

//  Exercise 6
const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];

const passed = students.filter(s=>s.isPassed);
console.log(passed);

students.filter(s=>s.isPassed).forEach(s=>{
  console.log(`Good job ${s.name}, you passed the course in ${s.course}`);
});
