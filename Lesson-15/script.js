function sum(a) {
    return function (b) {
        return a + b;
    }
}
const sum_es6 = a => b => a + b;


var result = sum(2);

console.log(result(3)); // 5
