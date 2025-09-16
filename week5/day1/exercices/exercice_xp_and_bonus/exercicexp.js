// Exercise 1
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve("Number is less than or equal to 10")
    } else {
      reject("Number is greater than 10")
    }
  })
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

// Exercise 2
const promise = new Promise((resolve) => {
  setTimeout(() => resolve("success"), 4000)
})
promise.then(result => console.log(result))

// Exercise 3
Promise.resolve(3).then(result => console.log(result))
Promise.reject("Boo!").catch(error => console.log(error))
