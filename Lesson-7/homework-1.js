// Подготовить строку из всех возможных букв английского алфавита.
// Задача:

// Спросить у пользователя какое количество рандомных значений нужно создать и какое минимальное и максимальное количество символов в них должно быть.
// 1. Заполнить массив рандомными строками в количестве, указанном пользователем, состоящими из значений соответствующей длины
// 2. Сообщить пользователю какое количество слов какой длины было добавлено. К примеру: 5 words with 10 characters, 7 words with 3 characters etc.
// 3. Сгруппировать слова в объект по количеству значений в строке: { 1: [‘a’, ‘b’, ‘c’, ‘d’], 2: [‘ab’, ‘cd’, ‘ef’, ‘gh’] }

var wordsAmount = prompt('How many words create?');
var min = prompt('Minimum symbols in a word?');
var max = prompt('Maximum symbols in a word?');

var wordsAmount = +wordsAmount;
var min = +min; 
var max = +max;  

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var array = [];
var obj = {};

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

for (i = 0; i < wordsAmount; i++) {

    var characters = getRandom(min, max);
    var word = [];
    for (n = 0; n < characters; n++) {
        var symbol = alphabet[getRandom(0, alphabet.length - 1)]; 
        word.push(symbol);    
    }
    word = word.join(''); 
    array.push(word);

    if (obj[characters]) {
        obj[characters].push(word);
    } else {obj[characters] = [word] }

   
}

console.log(array); // 1

for(var characters in obj) { // 2
	console.log(obj[characters].length + ' words with ' + characters + ' characters');
}

console.log(obj); // 3

