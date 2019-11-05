// 2. (Периписать самостоятельно) Скрипт о запросе на угадывние сгенерированного числа так, чтобы человек мог отменить игру, либо угадать, пока не станет соотвествовать


var num = Math.ceil(Math.random() * 10),
    guess;

console.log(num);

do {
    guess = prompt('Guess the number');
} while (guess !== null && +guess !== num);

if (+guess === num) {
    alert ('You\'re goddamn right. it\'s ' + num);
}