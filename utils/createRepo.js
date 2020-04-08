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
let { username } = require("../user.js");
const headers = require("../auth.js");

module.exports = async () => {
  io.write("------------------------------------------");
  // getting data from terminal
  if (username === "") {
    io.write(cyan("> Enter GitHub Username"));
    username = await io.read();
    io.write("");
  }
  io.write(cyan("> Enter Repo Title"));
  const title = await io.read();
  io.write("");
  io.write(
    cyan("> Enter Repo Description (You can leave it blank. Just Press Enter)")
  );
  const description = await io.read();
  io.write("");
  io.write(cyan("> Create Private Repo? (True/False)"));
  const private = await io.read();
  io.write("");
  io.write(cyan("> Create empty README.MD file? (True/False)"));
  const auto_init = await io.read();
  io.write("");

  const payLoad = {
    name: title,
    description,
    private,
    auto_init,
  };

  const options = {
    method: "POST",
    headers: headers,
    data: JSON.stringify(payLoad),
    url: `https://api.github.com/user/repos`,
  };

  await axios(options)
    .then((res) => {
      const name = "👌 DONE";
      const msg = "Repo Successfully Created!!";
      box(name, msg);
      io.write("");
      io.write(green(`Repo Link -> ${res.data.html_url}\n`));
    })
    .catch((err) => {
      const name = "⚠️  WARNING";
      const msg = "Repo Creation Failed!!";
      box(name, msg);
    });
};
