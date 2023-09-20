import express from "express";
import bodyParser from "body-parser";

//Get the directory regardless of where it is located.
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//Allows that when the body is requested in the req.body code, the value returned is not "undefined"..
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
