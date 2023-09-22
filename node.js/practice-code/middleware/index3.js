import express from "express";

const app = express();
const port = 3000;


//Option 1
function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.originalUrl);
  next();
}

app.use(logger);


//Option 2
// app.use((req, res, next) => {
//   console.log("Request Method: ", req.method);
//   console.log("Request URL: ", req.originalUrl);
//   next();
// });




app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
