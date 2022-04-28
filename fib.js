const http = require("http");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello World");
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server Running at http://${HOSTNAME}:${PORT}`);
});

var fullArray = [0, 1, 1];
for (var i = 0; i <= 1000;) {
  let lastArrValues = fullArray.slice(-2);
  let i = lastArrValues[0] + lastArrValues[1];
  fullArray.push(i);
  if (i >= 1000) {
    console.log(fullArray);
    break;
  }
}
