const io = require("console-read-write");
const email = require("./getEmail");
const chalk = require("chalk");

module.exports = async () => {
  console.log(
    chalk.green("\nEnter any option: \n") +
      chalk.yellow(
        "1. Get Email of any GitHub User\n2. Get Stargazers of any GitHub repo\n3. Open an Issue in any GitHub Repo\n\n"
      )
  );
  io.write(chalk.green("> Enter the option number: "));
  const option = await io.read();

  switch (option) {
    case "1":
      email();
      break;

    default:
      break;
  }
};
