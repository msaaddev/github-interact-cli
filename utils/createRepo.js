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
let { username, password } = require("./user");
const headers = require("./auth");

module.exports = async () => {
  console.log(headers);

  io.write("------------------------------------------");
  // getting data from terminal
  if (username === "" && password === "") {
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

  await axios
    .post(`https://api.github.com/user/repos?${headers.Authorization}`, {
      headers: headers,
      body: JSON.stringify(payLoad),
    })
    .then((res) => {
      const name = "👌 DONE";
      const msg = "Repo Successfully Created!!";
      box(name, msg);
    })
    .catch((err) => {
      console.log(err);

      const name = "⚠️  WARNING";
      const msg = "Repo Creation Failed!!";
      box(name, msg);
    });
};
