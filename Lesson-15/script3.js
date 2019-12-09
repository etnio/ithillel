// Pattern Module


var connection = (function () {
    var users = 0;
    return {
        inc:function() {
            return ++users;
        },
        dec:function() {
            return --users;
        },
        reset:function() {
            return users = 0;
        },
        getUsers:function() {
            return users;
        },
        users: users
    }
}());

connection.inc();
connection.inc();
connection.inc();
connection.inc();
connection.inc();
connection.inc();
connection.inc();

var usersAmount = connection.getUsers();

console.log(usersAmount);