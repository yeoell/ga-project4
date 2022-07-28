const express = require("express");
const pg = require("pg");

const port = process.env.PORT || 3001;
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});

app.use(express.static("./client/build"));
