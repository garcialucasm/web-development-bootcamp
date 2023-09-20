import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

//using Morgan, HTTP request logger middleware for node.js
app.use(morgan('tiny'));
app.use(morgan('combined'));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
