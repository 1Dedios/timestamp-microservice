const express = require("express");
const app = express();
const port = 3000;
let absolutePath = __dirname + "/public/index.html";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.get("/api/:date?", (req, res) => {
  const dateParam = req.params.date;
  const localDate = new Date(dateParam);
  const unixTime = Math.floor(localDate.getTime() / 1000);
  const utcDate = new Date(
    Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate())
  );
  const utcDateAsString = utcDate.toUTCString();

  if (Number.isNaN(dateParam)) {
    res.json({ error: "Invalid Date" });
  }

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

// why doesn't the code below work?
app.get("/api/:timestamp", (req, res) => {
  // 1451001600000;
  const param = req.params.timestamp;
  const paramInMilliSeconds = parseInt(param, 10) * 1000;
  const utcParamTime = new Date(paramInMilliSeconds);
  const utcParamTimeString = utcParamTime.toUTCString();

  res.json({ unix: parseInt(param), utc: utcParamTimeString });
});

app.listen(port, () => {
  console.log(`Timestamp Microservice app listening on port ${port}`);
});
