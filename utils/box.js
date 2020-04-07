const chalk = require("chalk");

module.exports = (name, data) => {
  if (name === "✉️  Email") {
    console.log(chalk.green("	-------------------------------------------"));
    console.log(chalk.green("	|                                         |"));
    console.log(chalk.green(`	      ${name}: `) + data);
    console.log(chalk.green("	|                                         |"));
    console.log(chalk.green("	-------------------------------------------"));
  } else if (data === "No Email Found!!") {
    console.log(chalk.red("	-------------------------------------------"));
    console.log(chalk.red("	|                                         |"));
    console.log(chalk.red(`	|        ${name}: `) + data + chalk.red("     |"));
    console.log(chalk.red("	|                                         |"));
    console.log(chalk.red("	-------------------------------------------"));
  } else {
    console.log(chalk.red("	-------------------------------------------"));
    console.log(chalk.red("	|                                         |"));
    console.log(chalk.red(`	|    ${name}: `) + data + chalk.red("    |"));
    console.log(chalk.red("	|                                         |"));
    console.log(chalk.red("	-------------------------------------------"));
  }
};
