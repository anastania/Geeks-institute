const gameInfo = [
  { username: "john", team: "red", score: 5, items: ["ball", "book", "pen"] },
  { username: "becky", team: "blue", score: 10, items: ["tape", "backpack", "pen"] },
  { username: "susy", team: "red", score: 55, items: ["ball", "eraser", "pen"] },
  { username: "tyson", team: "green", score: 1, items: ["book", "pen"] },
];

const usernames = [];
gameInfo.forEach(u => usernames.push(u.username + "!"));
console.log(usernames);

const winners = [];
gameInfo.forEach(u => { if (u.score > 5) winners.push(u.username); });
console.log(winners);

let totalScore = 0;
gameInfo.forEach(u => totalScore += u.score);
console.log(totalScore);
