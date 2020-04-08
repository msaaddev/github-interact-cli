const fs = require("fs");
const io = require("console-read-write");
const { green, red, yellow } = require("chalk");
const pwd = process.cwd();

try {
  const newAuth = require(`${pwd}/auth.js`);
} catch (error) {
  module.exports = async () => {
    io.write(
      red(
        "\n> This CLI will work best if you enter your GitHub Access Token & Username. THIS IS ONE TIME THINGY.\n"
      )
    );
    io.write(
      green(
        "> If you do not know how to create one, check -> https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line\n"
      )
    );

    io.write(yellow("Token: "));
    const token = await io.read();
    io.write("");
    io.write(yellow("Username: "));
    const username = await io.read();

    const userToken = `module.exports = {
    Authorization: "Token ${token}",
  }`;

    const userName = `module.exports = {
    username: "${username}",
  }`;

    fs.writeFile(`./auth.js`, userToken, (err) => {});
    fs.writeFile(`./user.js`, userName, (err) => {});
    io.write(
      green(
        "\n> Kindly restart the CLI now to ensure that everyone is working perfectly. You can do by selecting exit option.\n"
      )
    );
    io.write(red("> THIS IS ONE TIME THINGY."));
  };
}
