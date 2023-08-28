const express = require("express");
const app = express();
const port = 3000;
let absolutePath = __dirname + "/src/index.html";

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
