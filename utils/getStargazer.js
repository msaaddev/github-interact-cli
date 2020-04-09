/**
 *
 * Author: Muhammad Saad
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

const pwd = process.cwd();
const io = require("console-read-write");
const { cyan } = require("chalk");
const axios = require("axios");
const box = require("./box.js");
const exit = require("./exit.js");
let headers;
try {
  headers = require(`${pwd}/auth.js`);
} catch (error) {}

module.exports = async () => {
  io.write("------------------------------------------");
  // getting data from terminal
  io.write(cyan("> Enter GitHub Username"));
  const username = await io.read();
  io.write("");
  io.write(cyan("> Enter GitHub Repo Name"));
  const repo = await io.read();

  await axios
    .get(`https://api.github.com/repos/${username}/${repo}`, {
      headers: headers,
    })
    .then((res) => {
      const name = "⭐️  STARS";
      const data = res.data.stargazers_count;
      box(name, data);
      exit();
    })
    .catch((err) => {
      const name = "⚠️  WARNING";
      const msg = "Cannot Access Stars!!";
      box(name, msg);
      exit();
    });
};
