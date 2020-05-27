const http = require("http");

const server = http.createServer(async (req, res) => {
  console.log(process.env);

  res.writeHead(200, {
    "Content-type": "text/html",
  });
  res.end(
    `<h1>Hello World from OpenShift NodeJS App in POD NAME: ${process.env.MY_POD_NAME}</h1>`
  );
});

server.listen(8000, () => {
  console.log("Listening to requests on Port 8000");
});
