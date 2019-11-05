// 1. Переписать пример с итерацией числа и прерыванием цикла с помощью do/while

var userIsHappy = true,
    currentNumber = 0;

do {
    userIsHappy =
        confirm ('Are you happy that your number is ' + currentNumber++ + '?');
} while (userIsHappy);

console.log('Thank you for game!');
