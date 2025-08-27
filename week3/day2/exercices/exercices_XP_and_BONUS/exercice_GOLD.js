 // Exercise 1 
    function isBlank(str) {
      return str.trim().length === 0;
    }
    console.log("Exercise 1:");
    console.log(isBlank(''));     
    console.log(isBlank('abc')); 
    // Exercise 2
    function abbrevName(name) {
      let parts = name.split(" ");
      return parts[0] + " " + parts[1][0] + ".";
    }
    console.log("Exercise 2:");
    console.log(abbrevName("Robin Singh")); 
    // Exercise 3 
    function swapCase(str) {
      return str.split("")
                .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
                .join("");
    }
    console.log("Exercise 3:");
    console.log(swapCase("The Quick Brown Fox")); 
    
    // Exercise 4 
    function isOmnipresent(arr, val) {
      return arr.every(subArr => subArr.includes(val));
    }
    console.log("Exercise 4:");
    console.log(isOmnipresent([[1,1],[1,3],[5,1],[6,1]], 1));
    console.log(isOmnipresent([[1,1],[1,3],[5,1],[6,1]], 6)); 
