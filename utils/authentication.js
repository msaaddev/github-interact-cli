const fs = require("fs");
const io = require("console-read-write");
const auth = require("./auth.js");
const { green, red, yellow } = require("chalk");

module.exports = async () => {
  if (auth.Authorization === "") {
    io.write(
      red(
        "\n> This CLI will work best if you enter your GitHub Access Token & Username. THIS IS ONE TIME THING.\n"
      )
    );
    io.write(
      green(
        "> If you do not know how to create one, check -> https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line\n"
      )
    );

    io.write(yellow("Token: "));
    const token = await io.read();

    io.write(yellow("GitHub Username: "));
    const username = await io.read();

    const userToken = `module.exports = {
  Authorization: "Token ${token}",
}`;

    const userData = `module.exports = {
  username: "${username}",
}`;

    fs.writeFile("../utils/auth.js", userToken, (err) => {});
    fs.writeFile("../utils/user.js", userData, (err) => {});
  }
};
