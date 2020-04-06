/*
 *
 * Author: Muhammad Saad
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

const io = require("console-read-write");
const { cyan, red, green } = require("chalk");
const axios = require("axios");

const emailFetchAutomation = async () => {
  console.log("------------------------------------------");
  // getting data from terminal
  io.write(cyan("> Enter GitHub username"));
  const URL = await io.read();
  await axios
    .get(`https://api.github.com/users/${URL}/events/public`)
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].type === "PushEvent") {
          console.log(green("	-------------------------------------------"));
          console.log(green("	|                                         |"));
          console.log(
            green("	      ✉️  Email: ") +
              res.data[i].payload.commits[0].author.email
          );
          console.log(green("	|                                         |"));
          console.log(green("	-------------------------------------------"));
          break;
        }
      }
    })
    .catch((err) => {
      console.log(red("	------------------------------------------"));
      console.log(red("	|                                        |"));
      console.log(
        red("	|   ⚠️  WARNING:  ") + "Cannot Access Email!!" + red("   |")
      );
      console.log(red("	|                                        |"));
      console.log(red("	------------------------------------------"));
    });
};

emailFetchAutomation();
