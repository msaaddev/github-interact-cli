const {green, red} = require("chalk");

module.exports = (name, data) => {
  if (name === "✉️  Email") {
    console.log(green("	-------------------------------------------"));
    console.log(green("	|                                         |"));
    console.log(green(`	      ${name}: `) + data);
    console.log(green("	|                                         |"));
    console.log(green("	-------------------------------------------"));
  } else if (data === "No Email Found!!") {
    console.log(red("	-------------------------------------------"));
    console.log(red("	|                                         |"));
    console.log(red(`	|        ${name}: `) + data + red("     |"));
    console.log(red("	|                                         |"));
    console.log(red("	-------------------------------------------"));
  } else {
    console.log(red("	-------------------------------------------"));
    console.log(red("	|                                         |"));
    console.log(red(`	|    ${name}: `) + data + red("    |"));
    console.log(red("	|                                         |"));
    console.log(red("	-------------------------------------------"));
  }
};
