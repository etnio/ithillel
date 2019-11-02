//Написать скрипт, который предлагает пользователю угадать число, которое будет сгенерировано. Сообщить об успехе
//Среднее арифметическое нескольких введенных чисел
//Запросить введение чисел и найти их среднее арифметическое
//(Усложнить) Запросить введение чисел через запятую. Найти их среднее арифметическое.




var num1 = prompt('Type any number', ''); 
var num2 = prompt('Type one more number', '');
var num3 = prompt('Type last number', '');

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

var average = (num1 + num2 + num3) / 3;
average = average.toFixed(2);

console.log(average);

alert(`The average your numbers is about ${average}`); 

