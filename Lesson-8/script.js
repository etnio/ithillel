// Functions

function roarWithArgument(argument) {
    console.log('Roar', argument);
}

roarWithArgument('Hello World!');

function random(min, max) {
    return Math.round(Math.random() * (+max - +min) + +min);
}


function play(num, maxAttempts) {
    
    var result,
        attempts = 0;

    do {
        var guess = prompt('Guess a number:');
        result = Number(guess) !== num;
    } while (result && guess !== null && attempts < maxAttempts);

    return !result;
}

var num = random(0, 10);
var result = play(num, 2);

console.log(result);