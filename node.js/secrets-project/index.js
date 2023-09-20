//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";

//Get the directory regardless of where it is located.
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userAuthorised = false;

//Allows that when the body is requested in the req.body code, the value returned is not "undefined".
app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
  const pwdToCheck = req.body["password"];
  if (pwdToCheck === "ILoveProgramming") {
    console.log(`${pwdToCheck} is the correct password`);
    userAuthorised = true;
  }
  next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (userAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
