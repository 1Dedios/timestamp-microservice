const express = require("express");
const app = express();
const port = 3000;
let absolutePath = __dirname + "/src/index.html";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
