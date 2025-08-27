// Exercise 1 : Checking the BMI
let person1 = {
    fullName: "John Doe",
    mass: 80,
    height: 1.8,
    bmi: function () {
        return this.mass / (this.height * this.height);
    }
};

let person2 = {
    fullName: "Jane Smith",
    mass: 70,
    height: 1.6,
    bmi: function () {
        return this.mass / (this.height * this.height);
    }
};

function compareBMI(p1, p2) {
    if (p1.bmi() > p2.bmi()) {
        console.log(p1.fullName + " has the larger BMI");
    } else if (p2.bmi() > p1.bmi()) {
        console.log(p2.fullName + " has the larger BMI");
    } else {
        console.log("Both have the same BMI");
    }
}

compareBMI(person1, person2);

// Exercise 2 : Grade Average
function calcAverage(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum / list.length;
}

function findAvg(gradesList) {
    let avg = calcAverage(gradesList);
    console.log("Average is: " + avg);
    if (avg > 65) {
        console.log("You passed");
    } else {
        console.log("You failed and must repeat the course");
    }
}

findAvg([70, 80, 90]); 
findAvg([40, 50, 60]); 
