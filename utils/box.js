const chalk = require("chalk");

module.exports = (color, name, data) => {
  if (name === "✉️  Email") {
    console.log(chalk.green("	-------------------------------------------"));
    console.log(chalk.green("	|                                         |"));
    console.log(chalk.green(`	      ${name}: `) + data);
    console.log(chalk.green("	|                                         |"));
    console.log(chalk.green("	-------------------------------------------"));
  } else {
    console.log(chalk.red("	-------------------------------------------"));
    console.log(chalk.red("	|                                         |"));
    console.log(chalk.red(`	|    ${name}: `) + data + chalk.red("    |"));
    console.log(chalk.red("	|                                         |"));
    console.log(chalk.red("	-------------------------------------------"));
  }
};
