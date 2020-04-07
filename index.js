#!/usr/bin/env node
/**
 *
 * Author: Muhammad Saad
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

const header = require("./utils/header");
const options = require("./utils/options");
const auth = require("./utils/authentication");

const cli = async () => {
  header();
  try {
    await auth();
  } catch (err) {}
  options();
};

cli();
