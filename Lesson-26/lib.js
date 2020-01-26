// npm init
// npm i lodash - install




const { readFile, writeFile } = require("fs");
​
const sum = (...args) => args.reduce((acc, next) => acc + next, 0);
const multiply = value => value * value;
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
module.exports = {
  sum,
  multiply,
  writeFileWithPromise,
  readFileWithPromise
};