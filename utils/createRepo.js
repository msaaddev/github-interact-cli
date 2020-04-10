/**
 *
 * Author: Saad Irfan
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

const pwd = process.cwd();
const io = require("console-read-write");
const { cyan, green } = require("chalk");
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

  io.write(cyan("> Enter Repo Title"));
  const title = await io.read();
  io.write("");
  io.write(
    cyan("> Enter Repo Description (You can leave it blank. Just Press Enter.)")
  );
  const description = await io.read();
  io.write("");
  io.write(
    cyan(
      "> Create Private Repo? (True/False) (You can leave it blank. Public Repo will be created. Just Press Enter.)"
    )
  );
  let private = await io.read();
  if (private === "false" || private === "") private = false;
  io.write("");
  io.write(
    cyan(
      "> Create empty README.MD file? (True/False) (You can leave it blank. Just Press Enter.)"
    )
  );
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
    data: payLoad,
    url: `https://api.github.com/user/repos`,
  };

  await axios(options)
    .then((res) => {
      const name = "👌 DONE";
      const msg = "Repo Successfully Created!!";
      box(name, msg);
      io.write("");
      io.write(green(`Repo Link -> ${res.data.html_url}`));
      exit();
    })
    .catch((err) => {
      const name = "⚠️  WARNING";
      const msg = "Repo Creation Failed!!";
      box(name, msg);
      exit();
    });
};
