const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("안뇽!");
});

app.listen(4040, () => {
  console.log("server is running on http://localhost:4040");
});
