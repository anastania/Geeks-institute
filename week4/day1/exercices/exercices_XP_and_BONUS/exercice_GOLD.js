//  Exercise 1 : Nested functions → Nested arrow functions
const landscape = () => {
  let result = "";
  const flat = x => { for (let i = 0; i < x; i++) result += "_"; };
  const mountain = x => {
    result += "/";
    for (let i = 0; i < x; i++) result += "'";
    result += "\\";
  };
  flat(4);
  mountain(4);
  flat(4);
  return result;
};
console.log(landscape()); // ____/''''\____


//  Exercise 2 : Closure
const addTo = x => y => x + y;
const addToTen = addTo(10);
console.log(addToTen(3)); // 13


//  Exrcise 3 : Currying
const curriedSum1 = a => b => a + b;
console.log(curriedSum1(30)(1)); // 31


//  Exercise 4 : Currying
const curriedSum2 = a => b => a + b;
const add5 = curriedSum2(5);
console.log(add5(12)); // 17


//  Exercise 5 : Composing
const compose = (f, g) => a => f(g(a));
const add1 = n => n + 1;
const add5b = n => n + 5;
console.log(compose(add1, add5b)(10)); // 16
