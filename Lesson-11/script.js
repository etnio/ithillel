// var tasks = [],
//     speed = 2000;

// tasks.push(function () {
//     console.log('Hello');
// })

// tasks.push(function () {
//     console.log('World');
// })


var users = [
    {
        name: 'Vasya',
        salary: 5000
    },
    {
        name: 'Veniamin',
        salary: 9000
    }
];

// function each() {
//     for (let i = 0; i < users.length; i++) {
//         console.log(users[i].name);
//     }
// }

// function each(arr, cb) {
//     if (!cb) return;
//     for (var i = 0; i < arr.length; i++) {
//         cb(arr[i], i)
//     }
// }

users.forEach(function(u, i) {
    totalSalary += u.salary;
    console.log('Hello', u, i, u.name, u.salary)
})

function map(arr, cb) {
    if (!cb) return arr.slice();
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
    return newArr;
}





// each(users, function(user, i) {
//     console.log('Hello', i, users, users.name )
// });
// each(users, function(i) {
//     console.log(2 * 2, i)
// });
// each([], function() {
//     console.log(2 * 7, i)
// });

// var timerId = setTimeout(function callback() {
//     tasks.forEach(function () {
//         console.log('Hello');
//         // Here
//     })
//     timerId = setTimeout(callback, speed);
// }, speed);