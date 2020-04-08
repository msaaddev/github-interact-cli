const io = require("console-read-write");
const email = require("./getEmail.js");
const stars = require("./getStargazer.js");
const exit = require("./exit.js");
const issue = require("./createIssue.js");
const repo = require("./createRepo.js");
const chalk = require("chalk");

module.exports = async () => {
  io.write(
    chalk.green("\nEnter any option: \n") +
      chalk.yellow(
        "1. Get Email of any GitHub User\n2. Get Stargazers of any GitHub Repo\n3. Open an Issue in any GitHub Repo\n4. Create a GitHub Repo\n5. Exit\n\n"
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
    case "3":
      issue();
      break;
    case "4":
      repo();
      break;
    case "5":
      exit();
    default:
      break;
  }
};
