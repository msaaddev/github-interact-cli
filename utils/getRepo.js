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
const table = require("./repoOutput.js");
const clear = require("clear");
const exit = require("./exit");

let headers;
try {
  headers = require(`${pwd}/auth.js`);
} catch (error) {}

module.exports = async () => {
  io.write("------------------------------------------");
  // getting data from terminal

  io.write(cyan("> Enter Username"));
  const username = await io.read();

  const options = {
    method: "GET",
    headers: headers,
    url: `https://api.github.com/users/${username}/repos?page=1&per_page=1000`,
  };
  await axios(options)
    .then((res) => {
      //   console.log(res.data[1].description);
      clear();
      io.write("");

      for (let i = 0; i < res.data.length; i++) {
        table(
          i + 1,
          res.data[i].name,
          res.data[i].fork,
          res.data[i].html_url,
          res.data[i].description
        );
      }

      io.write("");
      io.write(cyan(`Total Repos: ${res.data.length}`));
      exit();
    })
    .catch((err) => {
      console.log(err);

      const name = "⚠️  WARNING";
      const msg = "Couldn't Get Repos!!";
      box(name, msg);
    });
};
