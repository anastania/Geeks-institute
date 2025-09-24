// app.js
import { people } from "./data.js";

function averageAge(arr) {
  const total = arr.reduce((sum, person) => sum + person.age, 0);
  return total / arr.length;
}

console.log("Average Age:", averageAge(people));
