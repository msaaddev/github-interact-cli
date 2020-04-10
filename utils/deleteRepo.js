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
const clear = require("clear");
const exit = require("./exit");

let headers, username;
try {
  headers = require(`${pwd}/auth.js`);
  username = require(`${pwd}/user.js`);
} catch (error) {}

module.exports = async () => {
  io.write("------------------------------------------");
  // getting data from terminal

  io.write(cyan("> Enter the repo name you want to delete: "));
  const repo = await io.read();

  const options = {
    method: "DELETE",
    headers: headers,
    url: `https://api.github.com/repos/${username.username}/${repo}`,
  };
  await axios(options)
    .then((res) => {
      const name = "👌 DONE";
      const msg = "Repo Successfully Deleted!!";
      box(name, msg);
      io.write("");
      exit();
    })
    .catch((err) => {
      const name = "⚠️  WARNING";
      const msg = "Couldn't Delete Repos!!";
      box(name, msg);
      exit();
    });
};
