#!/usr/bin/env node
/**
 *
 * Author: Saad Irfan
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

const clear = require("clear");
const header = require("./utils/header.js");
const options = require("./utils/options.js");
const auth = require("./utils/authentication.js");

const cli = async () => {
  clear();
  header();
  try {
    await auth();
  } catch (err) {}
  options();
};

cli();
