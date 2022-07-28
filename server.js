const express = require("express");
const pg = require("pg");

const port = process.env.PORT || 3001;
const app = express();

app.get("/", (req, res) => {
  res.send("test");
});

app.use(express.static("./client/build"));

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
