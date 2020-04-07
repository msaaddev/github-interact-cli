const { bgBlue } = require("chalk");
const pkg = require("../package.json");
const io = require("console-read-write");

module.exports = () =>
  io.write(bgBlue(`\n\n${pkg.name} v${pkg.version} by ${pkg.author.name}`));
