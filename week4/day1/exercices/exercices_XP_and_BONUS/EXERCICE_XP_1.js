//  Exercise 1
function funcOne() {
  let a = 5;
  if (a > 1) a = 3;
  alert(`inside the funcOne function ${a}`);
}
funcOne();

let a = 0;
function funcTwo() { a = 5; }
function funcThree() { alert(`inside the funcThree function ${a}`); }
funcThree(); funcTwo(); funcThree();

function funcFour() { window.a = "hello"; }
function funcFive() { alert(`inside the funcFive function ${a}`); }
funcFour(); funcFive();

let b = 1;
function funcSix() {
  let a = "test";
  alert(`inside the funcSix function ${a}`);
}
funcSix();

let c = 2;
if (true) {
  let a = 5;
  alert(`in the if block ${a}`);
}
alert(`outside of the if block ${c}`);


//  Exercise 2
const winBattle = () => true;
let experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);


//  Exercise 3
const isString = val => typeof val === "string";
console.log(isString("hello"));
console.log(isString([1,2,4,0]));


//  Exercise 4
const sum = (x, y) => x + y;
console.log(sum(3, 4));


//  Exercise 5
function toGrams1(kg) { return kg * 1000; }
console.log(toGrams1(2));

const toGrams2 = function(kg) { return kg * 1000; }
console.log(toGrams2(3));

// Declaration is hoisted, expression is not.
const toGrams3 = kg => kg * 1000;
console.log(toGrams3(4));


//  Exercise 6
(function(children, partner, location, job) {
  document.body.innerHTML += `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
})(2, "Anna", "Paris", "Developer");


// Exercise 7
(function(name) {
  const nav = document.querySelector("nav");
  const div = document.createElement("div");
  div.innerHTML = `<img src="profile.jpg" width="30"> ${name}`;
  nav.appendChild(div);
})("John");


//  Exercise 8
function makeJuice(size) {
  let ingredients = [];
  function addIngredients(i1, i2, i3) {
    ingredients.push(i1, i2, i3);
  }
  function displayJuice() {
    document.body.innerHTML += `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
  }
  addIngredients("apple", "banana", "orange");
  addIngredients("mango", "kiwi", "pineapple");
  displayJuice();
}
makeJuice("large");
