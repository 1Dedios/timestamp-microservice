const express = require("express");
const app = express();
const PORT = 3000;
let absolutePath = __dirname + "./public/index.html";
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.get("/date", (req, res) => {
  let currentTime = new Date();
  let unixSeconds = Math.floor(currentTime.getTime() / 1000);
  const utcDate = new Date(
    Date.UTC(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate()
    )
  );
  const utcDateAsString = utcDate.toUTCString();
    
  res.json({ unix: unixSeconds, utc: utcDateAsString });
});

app.get("/timestamp-conversion/:timestamp", (req, res) => {
  // TODO: accept timestamp in seconds and convert to human readable date UTC time zone (day of week, day of month, month, year, HH:mm:ss GMT)
  const timeStampParam = req.params.timestamp;
  const paramInMilliSeconds = parseInt(timeStampParam) * 1000;
  const utcParamTime = new Date(param);
  console.log('utc param time', utcParamTime)
  const utcParamTimeString = utcParamTime.toUTCString();

  res.json({ unix: param, utc: utcParamTimeString });
});

app.listen(PORT, () => {
  console.log(`Timestamp Microservice app listening on port ${PORT}`);
});
