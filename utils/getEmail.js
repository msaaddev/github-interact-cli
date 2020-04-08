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
  io.write("------------------------------------------");
  // getting data from terminal
  io.write(cyan("> Enter GitHub Username"));
  const URL = await io.read();
  await axios
    .get(`https://api.github.com/users/${URL}/events/public`, {
      headers: headers,
    })
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].type === "PushEvent") {
          const name = "✉️  EMAIL";
          box(name, res.data[i].payload.commits[0].author.email);
          break;
        }
        if (i === res.data.length - 1) {
          const name = "⚠️  WARNING";
          const msg = "No Email Found!!";
          box(name, msg);
        }
      }
    })
    .catch((err) => {
      const name = "⚠️  WARNING";
      const msg = "Cannot Access Email!!";
      box(name, msg);
    });
};
