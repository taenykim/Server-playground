const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("안뇽!");
});

app.listen(4040, () => {
  console.log("server is running on http://localhost:4040");
});
