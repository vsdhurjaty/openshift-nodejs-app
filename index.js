const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const html = `<h1>Hello World from our OpenShift NodeJS App</h1>
  <p>My Pod Name: ${process.env.MY_POD_NAME}</p>
  <p>My Application Name: ${process.env.MY_APPLICATION_NAME}</p>`;

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
