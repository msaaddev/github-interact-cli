const pkg = require('../package.json');
const { cyan } = require('chalk');
const io = require('console-read-write');

module.exports = () => {
	io.write(cyan(`\nThank you for using ${pkg.name}!\n`));
	io.write(
		cyan(
			'Please ⭐️  the repo: https://github.com/msaaddev/github-interact-cli/\n'
		)
	);
};
