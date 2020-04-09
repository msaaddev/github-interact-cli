const io = require("console-read-write");
const chalk = require("chalk");
const email = require("./getEmail.js");
const stars = require("./getStargazer.js");
const exit = require("./exit.js");
const issue = require("./createIssue.js");
const repo = require("./createRepo.js");
const listrepo = require("./getRepo");

module.exports = async () => {
  io.write(
    chalk.green("\nEnter any option: \n") +
      chalk.yellow(
        "1. Create a GitHub Repo \n2. List Public Repos of any GitHub User\n3. Open an Issue in any GitHub Repo \n4. Get Email of any GitHub User\n5. Get Stargazers of any GitHub Repo\n6. Exit\n\n"
      )
  );
  io.write(chalk.green("> Enter the option number: "));
  const option = await io.read();

  switch (option) {
    case "1":
      repo();
      break;
    case "2":
      listrepo();
      break;
    case "3":
      issue();
      break;
    case "4":
      email();
      break;
    case "5":
      stars();
      break;
    case "6":
      exit();
    default:
      break;
  }
};
