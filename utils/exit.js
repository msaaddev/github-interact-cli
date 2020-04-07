const pkg = require("../package.json");
const { cyan } = require("chalk");

module.exports = () => {
  console.log(cyan(`\nThank you for using ${pkg.name}!\n`));
};
