const express = require("express");
const app = express();
const port = 3000;

app.get("/news", (req, res) => {
  var a = 11;
  var b = 23;
  var c = a + b;
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
