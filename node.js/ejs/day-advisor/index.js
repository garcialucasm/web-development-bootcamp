import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;
const today = new Date();
let day = today.getDay();
let dType = "a weekday";
let dAdvice = "it's time to work hard!";

if (day === 0 || day === 6) {
  dType = "a weekend";
  dAdvice = "it's time to rest!";
}

app.get("/", (req, res) => {
  res.render("index.ejs", { dayType: dType, dayAdvice: dAdvice });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
