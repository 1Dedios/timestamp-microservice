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
  const utcDate = new Date(
    Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate())
  );
  const utcDateAsString = utcDate.toUTCString();

  if (!dateParam) {
    let currentTime = new Date();
    let unixTime = Math.floor(currentTime.getTime() / 1000);
    const utcDate = new Date(
      Date.UTC(
        currentTime.getFullYear(),
        currentTime.getMonth(),
        currentTime.getDate()
      )
    );
    const utcDateAsString = utcDate.toUTCString();

    res.json({ unix: unixTime, utc: utcDateAsString });
  }

  res.json({ unix: unixTime, utc: utcDateAsString });
});

app.get("/api/:timestamp", (req, res) => {
  // 1451001600000;
  const param = parseInt(req.params.timestamp);
  const utcParamTime = new Date(param);
  console.log(utcParamTime);
  const utcParamTimeString = utcParamTime.toUTCString();
  console.log(utcParamTimeString);

  res.json({ unix: param, utc: utcParamTimeString });
});

app.listen(port, () => {
  console.log(`Timestamp Microservice app listening on port ${port}`);
});
