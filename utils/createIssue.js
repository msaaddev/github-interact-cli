/**
 *
 * Author: Muhammad Saad
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

const io = require("console-read-write");
const { cyan, green } = require("chalk");
const axios = require("axios");
const box = require("./box.js");
const headers = require("../auth/auth");

module.exports = async () => {
  io.write("------------------------------------------");
  // getting data from terminal

  io.write(cyan("> Enter GitHub Username where the repo exists"));
  username = await io.read();
  io.write("");

  io.write(cyan("> Enter the repo name"));
  repo = await io.read();
  io.write("");

  io.write(cyan("> Enter Issue Title"));
  const title = await io.read();
  io.write("");
  io.write(cyan("> Enter Issue Description"));
  const description = await io.read();
  io.write("");

  const payLoad = {
    title: title,
    body: description,
  };

  const options = {
    method: "POST",
    headers: headers,
    data: JSON.stringify(payLoad),
    url: `https://api.github.com/repos/${username}/${repo}/issues`,
  };

  await axios(options)
    .then((res) => {
      const name = "👌 DONE";
      const msg = "Issue Successfully Created!!";
      box(name, msg);

      io.write("");
      io.write(green(`Issue Link -> ${res.data.html_url}\n`));
    })
    .catch((err) => {
      const name = "⚠️  WARNING";
      const msg = "Issue Creation Failed!!";
      box(name, msg);
    });
};
