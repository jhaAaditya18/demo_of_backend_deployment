require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/login", (req, res) => {
  res.send("login to your account");
});

app.get("/twitter", (req, res) => {
  res.send("My name is aaditya jha");
});
app.get("/youTube", (req, res) => {
  res.send("<h1>subscribe my youtube channel<h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
