const { sum, multiply } = require("./lib");
const { readFile, writeFile } = require("./lib");
const http = require("http");
​
const hostname = "127.0.0.1";
const port = 3000;
​
const writeFileWithPromise = (filePath, data) => {
  return new Promise(res => {
    writeFile(filePath, data, err => {
      res(err);
    });
  });
};
​
const readFileWithPromise = filePath => {
  return new Promise(res => {
    readFile(filePath, (err, data) => {
      res(data.toString());
    });
  });
};
​
const server = http.createServer((request, response) => {
  writeFileWithPromise(
    "./text.txt",
    `Hello ${Math.random() * sum(1, 2, 3, 4, 5, 6)}`
  )
    .then(() => readFileWithPromise("./text.txt"))
    .then(data => {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/plain");
      response.end(data);
    });
});
​
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});