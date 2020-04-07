const { green, red, yellow } = require("chalk");

module.exports = (name, data) => {
  if (name === "✉️  Email") {
    console.log(green("\n	-------------------------------------------"));
    console.log(green("	|                                         |"));
    console.log(green(`	      ${name}: `) + data);
    console.log(green("	|                                         |"));
    console.log(green("	-------------------------------------------"));
  } else if (data === "No Email Found!!") {
    console.log(red("\n	-------------------------------------------"));
    console.log(red("	|                                         |"));
    console.log(red(`	|        ${name}: `) + data + red("     |"));
    console.log(red("	|                                         |"));
    console.log(red("	-------------------------------------------"));
  } else if (name === "⭐️  Stars") {
    console.log(yellow("\n	-------------------------------------------"));
    console.log(yellow("	|                                         |"));
    console.log(yellow(`	               ${name}: `) + data);
    console.log(yellow("	|                                         |"));
    console.log(yellow("	-------------------------------------------"));
  } else {
    console.log(red("\n	-------------------------------------------"));
    console.log(red("	|                                         |"));
    console.log(red(`	|    ${name}: `) + data + red("    |"));
    console.log(red("	|                                         |"));
    console.log(red("	-------------------------------------------"));
  }
};
