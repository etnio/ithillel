var num = Math.ceil(Math.random() * 10),
    guess;
console.log(num);
do {
    guess = prompt ('Guess a number');
} while (guess !== null && guess != num);

if (guess !== null){
alert ('Yes! Number is ' + num);
}