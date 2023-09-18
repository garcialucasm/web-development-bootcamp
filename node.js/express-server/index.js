import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    //console.log(req.rawHeaders);
    res.send("<h1>Hello world!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone: +351 999 888 777</p>");
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
