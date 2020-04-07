const { bgBlue } = require("chalk");
const pkg = require("../package.json");

module.exports = () =>
  console.log(bgBlue(`\n\n${pkg.name} v${pkg.version} by ${pkg.author.name}`));
