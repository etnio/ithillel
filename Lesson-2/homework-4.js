//Написать скрипт, который предлагает пользователю угадать число, которое будет сгенерировано. Сообщить об успехе
//Среднее арифметическое нескольких введенных чисел
//Запросить введение чисел и найти их среднее арифметическое
//(Усложнить) Запросить введение чисел через запятую. Найти их среднее арифметическое.




var str = prompt('Type several numbers with comma', ''); 

var arr = str.split(', '); // Convert string to array by delim (', ')

var items = arr.length;

var strSum = arr.join('+');

var sum = eval(strSum); //

var average = sum/items; 

alert(`The average your numbers is about ${average}`);  //The success alert

