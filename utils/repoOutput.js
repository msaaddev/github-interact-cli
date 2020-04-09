const { yellow, green, red } = require("chalk");
const io = require("console-read-write");

module.exports = (no, name, original, url, description) => {
  io.write(
    `  ${yellow("NO: ")}${green(`${no}`)}\n  ${yellow("NAME: ")}${green(
      `${name}`
    )}\n  ${yellow("FORKED: ")}${green(`${original}`)}\n  ${yellow("URL: ")}${green(
      `${url}`
    )}\n  ${yellow("DESCRIPTION: ")}${green(`${description}`)}`
  );
  io.write(
    red(
      "-------------------------------------------------------------------------------------------------------------"
    )
  );
};
