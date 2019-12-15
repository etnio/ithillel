function connection () {
    var users = 0;
    return function () {
        return ++users;
    }

}

var connect = connection();

console.log(connect());
console.log(connect());
console.log(connect());
console.log(connect());
console.log(connect());
console.log(connect());
console.log(connect());
console.log(connect());
console.log(connect());