// 1. Переписать пример с итерацией числа и прерыванием цикла с помощью while и do/while
// 2. (Периписать самостоятельно) Скрипт о запросе на угадывние сгенерированного числа так, чтобы человек мог отменить игру, либо угадать, пока не станет соотвествовать
// 3. Запросить у пользователя значение, кратное которому будут выводиться числа - вывести их в консоль
// 3.1 (Усложняем) Кроме кратного запросить количество числе, которые следует вывести
// Все задания написать с помощью while и for циклов

var userIsHappy = true,
    currentNumber = 0;

// do {
//     userIsHappy =
//         confirm ('Are you happy that your number is ' + currentNumber++ + '?');
// } while (userIsHappy);

// console.log('Thank you for game!');

while (userIsHappy) {
    userIsHappy =
        confirm ('Are you happy that your number is ' + currentNumber++ + '?');
}
console.log('Thank you for game!');