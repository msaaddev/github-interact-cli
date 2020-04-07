const { cyan } = require("chalk");
const pkg = require("../package.json");

module.exports = () =>
  console.log(cyan(`\n\n${pkg.name} v${pkg.version} by ${pkg.author.name}`));
