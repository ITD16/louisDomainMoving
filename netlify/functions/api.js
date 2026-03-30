const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express on Netlify is working");
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Adam" },
    { id: 2, name: "John" }
  ]);
});

module.exports.handler = serverless(app);