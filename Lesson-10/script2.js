// function asyncFnc(callback) {
//     setTimeout(function() {
//         callback('Hello World!');
//     });
// }

// asyncFnc(function(result) {
//     console.log('Hello');
//     console.log(result);
//     console.log('World');
// });

function asyncFnc(callback) {
    setTimeout(function() {
        callback('Hello World!');
    }, 1000);
}

var timerId = asyncFnc(function(result) {
    console.log('Hello');
    console.log(result);
    console.log('World');
});

clearTimeout(timerId);