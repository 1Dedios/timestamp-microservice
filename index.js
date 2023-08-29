const express = require("express");
const app = express();
const port = 3000;
let absolutePath = __dirname + "/src/index.html";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.get("/api/:date?", (req, res) => {
  // json object with unix and utc keys of given date parameter
});

app.get("/api/", (req, res) => {
  // json object with unix and utc keys of current date and time
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
