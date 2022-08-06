const express = require("express");
const pg = require("pg");
require("dotenv").config();
const db = require("./database/db.js");
const expressSession = require("express-session");
const pgSession = require("connect-pg-simple")(expressSession);

const sessionController = require("./controllers/session");
const signupController = require("./controllers/signup");

const port = process.env.PORT || 3001;
const app = express();

app.use(express.static("./client/build"));

app.get("/test", (req, res) => {
  res.send("test");
});

app.use(
  expressSession({
    store: new pgSession({
      pool: db,
      createTableIfMissing: true,
    }),
    secret: process.env.EXPRESS_SESSION_SECRET_KEY,
  })
);

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  next();
});

app.use("/api/session", sessionController);
app.use("/api/users", signupController);

//handle any error that wasn't handled
app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || "something went wrong";
  res.status(status).json({ message });
  next(err);
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});

server.get("/*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});
