const values = [1, 2, 3, 4, 5];
const casino = new Casino();
casino.fillLines(3, values);
var result = casino.checkLines(2); //check 2-nd line
console.log(casino);
console.log(result);