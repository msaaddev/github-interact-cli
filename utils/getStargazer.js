/**
 *
 * Author: Muhammad Saad
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

const io = require("console-read-write");
const { cyan } = require("chalk");
const box = require("./box");
const axios = require("axios");
const headers = require("./auth");

module.exports = async () => {
  console.log("------------------------------------------");
  // getting data from terminal
  io.write(cyan("> Enter GitHub Username"));
  const username = await io.read();
  console.log("");
  io.write(cyan("> Enter GitHub Repo Name"));
  const repo = await io.read();


  await axios
    .get(
      `https://api.github.com/repos/${username}/${repo}?access_token=${headers.Authorization}`,
      {
        headers: headers,
      }
    )
    .then((res) => {
      const name = "⭐️  Stars";
      const data = res.data.stargazers_count;
      box(name, data);
    })
    .catch((err) => {
      const name = "⚠️  WARNING";
      const msg = "Cannot Access Stars!!";
      box(name, msg);
    });
};
