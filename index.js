const express = require("express");
const app = express();

app.get("/", (req, res) => {
const html = `<h1>Hello World from OpenShift NodeJS App</h1>
  <p>My Name: Venkata Dhurjaty</p>
  <p>My Application Name: OpenShift NodeJS App</p>
  <p>Project: CSC-227 FINAL PROJECT</p>`;

  res.status(200).send(html);
});

app.get("/health", (req, res) => {
  const html = "<h1>Application is Healthy</h1>";

  res.status(200).send(html);
});

app.get("/unhealthy", (req, res) => {
  const html = "<h1>Application is Unhealthy</h1>";
  res.status(404).send(html);
});

app.listen(8000, () => {
  console.log("Application is listening to requests on port 8000");
});
