const http = require("http");
const getId = require("docker-container-id");

const server = http.createServer(async (req, res) => {
  let id = await getId();
  res.writeHead(200, {
    "Content-type": "text/html",
  });
  res.end(
    `<h1>Hello World from OpenShift NodeJS App from ContainerId#${id}</h1>`
  );
});

server.listen(8000, () => {
  console.log("Listening to requests on Port 8000");
});
