const express = require("express");
const app = express();
const port = 3000;
let absolutePath = __dirname + "/src/index.html";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

// the question mark after the date parameter makes that parameter optional so /api should still work
app.get("/api/:date?", (req, res) => {
  const dateParam = req.params.date;
  const localDate = new Date(dateParam);
  const unixTime = Math.floor(localDate.getTime() / 1000);

  if (!dateParam) {
    let currentTime = new Date();
    let unixTime = Math.floor(currentTime.getTime() / 1000);

    res.json({ unix: unixTime, utc: "null" });
  }

  res.json({ unix: unixTime, utc: "null" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
