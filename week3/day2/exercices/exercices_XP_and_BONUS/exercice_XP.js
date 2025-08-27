// Exercise 1 
function displayNumbersDivisible(divisor = 23) {
    let sum = 0
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i)
            sum += i
        }
    }
    console.log("Sum:", sum)
}
displayNumbersDivisible()
displayNumbersDivisible(3)
displayNumbersDivisible(45)

// Exercise 2 
const stock = { banana: 6, apple: 0, pear: 12, orange: 32, blueberry: 1 }
const prices = { banana: 4, apple: 2, pear: 1, orange: 1.5, blueberry: 10 }
const shoppingList = ["banana", "orange", "apple"]
function myBill() {
    let total = 0
    for (let item of shoppingList) {
        if (stock[item] > 0) {
            total += prices[item]
            stock[item] -= 1
        }
    }
    return total
}
console.log(myBill())

// Exercise 3 
function changeEnough(itemPrice, amountOfChange) {
    let sum = amountOfChange[0] * 0.25 + amountOfChange[1] * 0.10 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01
    return sum >= itemPrice
}
console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(14.11, [2, 100, 0, 0]))
console.log(changeEnough(0.75, [0, 0, 20, 5]))

// Exercise 4
function hotelCost(nights) {
    return nights * 140
}
function planeRideCost(destination) {
    if (destination === "London") return 183
    if (destination === "Paris") return 220
    return 300
}
function rentalCarCost(days) {
    let cost = days * 40
    if (days > 10) cost *= 0.95
    return cost
}
function totalVacationCost(nights, destination, days) {
    let hotel = hotelCost(nights)
    let plane = planeRideCost(destination)
    let car = rentalCarCost(days)
    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`)
    return car + hotel + plane
}
console.log(totalVacationCost(5, "Paris", 12))

// Exercise 5
const container = document.getElementById("container")
console.log(container)
document.querySelectorAll(".list li")[1].textContent = "Richard"
document.querySelectorAll(".list")[1].children[1].remove()
document.querySelectorAll(".list").forEach(ul => ul.firstElementChild.textContent = "YourName")
document.querySelectorAll(".list").forEach(ul => ul.classList.add("student_list"))
document.querySelector(".list").classList.add("university", "attendance")
container.style.background = "lightblue"
container.style.padding = "10px"
document.querySelectorAll(".list li").forEach(li => {
    if (li.textContent === "Dan") li.style.display = "none"
    if (li.textContent === "Richard") li.style.border = "1px solid black"
})
document.body.style.fontSize = "18px"
if (container.style.background === "lightblue") {
    alert("Hello " + document.querySelectorAll(".list li")[0].textContent + " and " + document.querySelectorAll(".list li")[1].textContent)
}

// Exercise 6
const nav = document.getElementById("navBar")
nav.setAttribute("id", "socialNetworkNavigation")
const newLi = document.createElement("li")
newLi.textContent = "Logout"
nav.querySelector("ul").appendChild(newLi)
console.log(nav.querySelector("ul").firstElementChild.textContent)
console.log(nav.querySelector("ul").lastElementChild.textContent)

// Exercise 7
const allBooks = [
    { title: "Harry Potter", author: "JK Rowling", image: "https://picsum.photos/100", alreadyRead: true },
    { title: "The Hobbit", author: "JRR Tolkien", image: "https://picsum.photos/101", alreadyRead: false }
]
const section = document.querySelector(".listBooks")
allBooks.forEach(book => {
    const div = document.createElement("div")
    const p = document.createElement("p")
    p.textContent = `${book.title} written by ${book.author}`
    if (book.alreadyRead) p.style.color = "red"
    const img = document.createElement("img")
    img.src = book.image
    img.width = 100
    div.appendChild(p)
    div.appendChild(img)
    section.appendChild(div)
})
