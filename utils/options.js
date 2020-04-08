const io = require("console-read-write");
const chalk = require("chalk");
const email = require("./getEmail.js");
const stars = require("./getStargazer.js");
const exit = require("./exit.js");
const issue = require("./createIssue.js");
const repo = require("./createRepo.js");

module.exports = async () => {
  io.write(
    chalk.green("\nEnter any option: \n") +
      chalk.yellow(
        "1. Create a GitHub Repo \n2. Open an Issue in any GitHub Repo \n3. Get Email of any GitHub User\n4. Get Stargazers of any GitHub Repo\n5. Exit\n\n"
      )
  );
  io.write(chalk.green("> Enter the option number: "));
  const option = await io.read();

  switch (option) {
    case "1":
      repo();
      break;
    case "2":
      issue();
      break;
    case "3":
      email();
      break;
    case "4":
      stars();
      break;
    case "5":
      exit();
    default:
      break;
  }
};
