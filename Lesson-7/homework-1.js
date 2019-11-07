// Подготовить строку из всех возможных букв английского алфавита.
// Задача:

// Спросить у пользователя какое количество рандомных значений нужно создать и какое минимальное и максимальное количество символов в них должно быть.
// Заполнить массив рандомными строками в количестве, указанном пользователем, состоящими из значений соответствующей длины
// Сообщить пользователю какое количество слов какой длины было добавлено. К примеру: 5 words with 10 characters, 7 words with 3 characters etc.
// Сгруппировать слова в объект по количеству значений в строке: { 1: [‘a’, ‘b’, ‘c’, ‘d’], 2: [‘ab’, ‘cd’, ‘ef’, ‘gh’] }

//var count = prompt('How many words create?');
//var min = prompt('Minimum symbols in a word?');
//var max = prompt('Maximum symbols in a word?');

var count = '50'; //var count = prompt('How many words create?');
var min = '3'; //var min = prompt('Minimum characters in a word?');
var max = '10'; //var max = prompt('Maximum characters in a word?');

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var arr = [];
var arrWord = [];




    numChar = Math.round(Math.random() * (+max - +min) + +min);
    for (i = 0; i < numChar; i++) {
        arrWord[i] = alphabet[Math.ceil(Math.random() * (alphabet.length - 1))];    
    }
    arrWord = arrWord.join('');    




for (i = 0; i < +count; i++) {
    numChar = Math.round(Math.random() * (+max - +min) + +min);
    arr.push(arrWord);
}

console.log(arr);

//-- Random word generator
// numChar = Math.round(Math.random() * (+max - +min) + +min);
// for (i = 0; i < numChar; i++) {
//     arrWord[i] = alphabet[Math.ceil(Math.random() * (alphabet.length - 1))]; 
// }
// arrWord = arrWord.join(''); 
//--


//obj[numChar] = arrWord;

// -- Object 
// var obj = {};
// var range = +max - +min;

// for (i = 0; range >= 0 ; i++ ) {
//     obj[min] = arrWord;
//     min++;
//     range--;
// }
// console.log(obj);
//---



// for (i = 0; i < +count; i++) {
//     numChar = Math.round(Math.random() * (+max - +min) + +min);
//     l = alphabet[Math.ceil(Math.random() * (alphabet.length - 1))];
//     arrWord = [];
//     //arrWord.length = numChar;
//     arrWord = arrWord.join('');
//     arr.push(arrWord);
// }

// for (var parameter in sss) {
//     obj[]
// }

// console.log(arr);
// console.log(obj);
