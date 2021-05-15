#!/usr/bin/env node
/**
 *
 * Author: Saad Irfan
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

const clear = require('clear');
const header = require('./header.js');
const auth = require('./authentication.js');
const email = require('./getEmail.js');

const cli = async () => {
	clear();
	header();
	try {
		await auth();
	} catch (err) {}
	email();
};

cli();
