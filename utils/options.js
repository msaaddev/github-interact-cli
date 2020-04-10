const io = require("console-read-write");
const chalk = require("chalk");
const email = require("./getEmail.js");
const stars = require("./getStargazer.js");
const exit = require("./exit.js");
const issue = require("./createIssue.js");
const repo = require("./createRepo.js");
const listRepo = require("./getRepo.js");
const deleteRepo = require("./deleteRepo.js");

module.exports = async () => {
  io.write(
    chalk.green("\nEnter any option: \n") +
      chalk.yellow(
        "1. Create a GitHub Repo \n2. Delete your repo\n3. List Public Repos of any GitHub User\n4. Open an Issue in any GitHub Repo \n5. Get Email of any GitHub User\n6. Get Stargazers of any GitHub Repo\n7. Exit\n\n"
      )
  );
  io.write(chalk.green("> Enter the option number: "));
  const option = await io.read();

  switch (option) {
    case "1":
      repo();
      break;
    case "2":
      deleteRepo();
      break;
    case "3":
      listRepo();
      break;
    case "4":
      issue();
      break;
    case "5":
      email();
      break;
    case "6":
      stars();
      break;
    case "7":
      exit();
    default:
      break;
  }
};
