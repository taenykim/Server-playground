const http = require("http");
const fs = require("fs");
const app = http.createServer(function (request, response) {
  let url = request.url;
  if (request.url == "/") {
    url = "/index.html";
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
