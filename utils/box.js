const { green, red, yellow } = require("chalk");
const io = require("console-read-write");

module.exports = (name, data) => {
  if (name === "✉️  Email") {
    io.write(green("\n	-------------------------------------------"));
    io.write(green("	|                                         |"));
    io.write(green(`	      ${name}: `) + data);
    io.write(green("	|                                         |"));
    io.write(green("	-------------------------------------------"));
  } else if (data === "No Email Found!!") {
    io.write(red("\n	-------------------------------------------"));
    io.write(red("	|                                         |"));
    io.write(red(`	|        ${name}: `) + data + red("     |"));
    io.write(red("	|                                         |"));
    io.write(red("	-------------------------------------------"));
  } else if (name === "⭐️  Stars") {
    io.write(yellow("\n	-------------------------------------------"));
    io.write(yellow("	|                                         |"));
    io.write(yellow(`	               ${name}: `) + data);
    io.write(yellow("	|                                         |"));
    io.write(yellow("	-------------------------------------------"));
  } else {
    io.write(red("\n	-------------------------------------------"));
    io.write(red("	|                                         |"));
    io.write(red(`	|    ${name}: `) + data + red("    |"));
    io.write(red("	|                                         |"));
    io.write(red("	-------------------------------------------"));
  }
};
