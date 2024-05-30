const express = require("express");

const PORT = 8080;
const app = express();

const instance = process.env.INSTANCE
  ? process.env.INSTANCE
  : "no instance feed";

app.get("/", (req, res) => {
  console.log(req);
  res.send(`Hello world from ${instance}\n`);
});

app.listen(PORT);

console.log(`Running on port: ${PORT}`);
