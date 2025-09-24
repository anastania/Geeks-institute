const chalk = require("chalk");

function showMessage() {
  console.log(chalk.blue("This is a blue message!"));
  console.log(chalk.green.bold("This is a bold green success message!"));
  console.log(chalk.red.bgWhite("This is a red error message with white background!"));
}
module.exports = showMessage;
