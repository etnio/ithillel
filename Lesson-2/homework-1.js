//Написать скрипт, который предлагает пользователю угадать число, которое будет сгенерировано. Сообщить об успехе
//Среднее арифметическое нескольких введенных чисел
//Запросить введение чисел и найти их среднее арифметическое
//(Усложнить) Запросить введение чисел через запятую. Найти их среднее арифметическое.


iconSuccess = String.fromCodePoint(0x2705); // Success icon
iconWrong = String.fromCodePoint(0x274C); // Wrong icon

var max = 10;
var min = 1;
var randNum = Math.round(Math.random() * (max - min) + min); // Random number

console.log('Random:' + randNum);
console.log(typeof randNum);

var num = prompt(`Guess the number from ${min} to ${max}?`, ''); 

num = Number(num); // Convert string to number
console.log(num); 
console.log(typeof num);

if (num === randNum) {
    alert(`${iconSuccess} You are goddamn right. it's ${randNum}`); //The success alert
}
else {
    alert(`${iconWrong} You are wrong.`); //The wrong alert
}

