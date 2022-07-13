//main file responsible for creating and hosting server on a host and port

const http = require("http");
const { requestHandler } = require("./handlers");
const port = 3000;
const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server is running @ http://localhost:${port}`);
});
