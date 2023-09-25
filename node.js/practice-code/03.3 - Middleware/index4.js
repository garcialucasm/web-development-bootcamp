import express from "express";
import bodyParser from "body-parser";

//Get the directory regardless of where it is located.
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

//Allows that when the body is requested in the req.body code, the value returned is not "undefined"..
app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}🤘</h2>`);
  console.log(bandName);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
