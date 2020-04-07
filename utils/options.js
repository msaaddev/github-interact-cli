const io = require("console-read-write");
const email = require("./getEmail");
const stars = require("./getStargazer");
const exit = require("./exit");
const chalk = require("chalk");

module.exports = async () => {
  io.write(
    chalk.green("\nEnter any option: \n") +
      chalk.yellow(
        "1. Get Email of any GitHub User\n2. Get Stargazers of any GitHub Repo\n3. Open an Issue in any GitHub Repo\n4. Exit\n\n"
      )
  );
  io.write(chalk.green("> Enter the option number: "));
  const option = await io.read();

  switch (option) {
    case "1":
      email();
      break;
    case "2":
      stars();
      break;
    case "4":
      exit();
    default:
      break;
  }
};
