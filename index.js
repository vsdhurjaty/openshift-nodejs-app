const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  const html = `<h1>Hello World from OpenShift NodeJS Application</h1>
  <p>Pod Name: ${process.env.MY_POD_NAME}</p>
  <p>Application Name: ${process.env.MY_APPLICATION_NAME}</p>`;

  res.end(html);
});

server.listen(8000, () => {
  console.log("Listening to requests on Port 8000");
});
