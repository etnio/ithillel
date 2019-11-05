// 1. Переписать пример с итерацией числа и прерыванием цикла с помощью while

var userIsHappy = true,
    currentNumber = 0;

while (userIsHappy) {
    userIsHappy =
        confirm ('Are you happy that your number is ' + currentNumber++ + '?');
}
console.log('Thank you for game!');