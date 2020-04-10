const { green, red, yellow } = require("chalk");
const io = require("console-read-write");

module.exports = (name, data) => {
  if (name === "✉️  EMAIL") {
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
  } else if (name === "⭐️  STARS") {
    io.write(yellow("\n	-------------------------------------------"));
    io.write(yellow("	|                                         |"));
    io.write(yellow(`	               ${name}: `) + data);
    io.write(yellow("	|                                         |"));
    io.write(yellow("	-------------------------------------------"));
  } else if (name === "👌 DONE") {
    io.write(yellow("\n	-------------------------------------------"));
    io.write(yellow("	|                                         |"));
    io.write(yellow(`	     ${name}: `) + data);
    io.write(yellow("	|                                         |"));
    io.write(yellow("	-------------------------------------------"));
  } else if (data === "Issue Successfully Created!!") {
    io.write(yellow("\n	-------------------------------------------"));
    io.write(yellow("	|                                         |"));
    io.write(yellow(` ${name}: `) + data);
    io.write(yellow("	|                                         |"));
    io.write(yellow("	-------------------------------------------"));
  } else if (data === "Issue Creation Failed!!") {
    io.write(red("\n	-------------------------------------------"));
    io.write(red("	|                                         |"));
    io.write(red(`	|   ${name}: `) + data + red("   |"));
    io.write(red("	|                                         |"));
    io.write(red("	-------------------------------------------"));
  } else if (data === "Couldn't Delete Repos!!") {
    io.write(red("\n	-------------------------------------------"));
    io.write(red("	|                                         |"));
    io.write(red(`	|    ${name}: `) + data + red("  |"));
    io.write(red("	|                                         |"));
    io.write(red("	-------------------------------------------"));
  } else {
    io.write(red("\n	-------------------------------------------"));
    io.write(red("	|                                         |"));
    io.write(red(`	|    ${name}: `) + data + red("   |"));
    io.write(red("	|                                         |"));
    io.write(red("	-------------------------------------------"));
  }
};
