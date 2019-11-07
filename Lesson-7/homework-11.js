// Подготовить строку из всех возможных букв английского алфавита.
// Задача:

// Спросить у пользователя какое количество рандомных значений нужно создать и какое минимальное и максимальное количество символов в них должно быть.
// Заполнить массив рандомными строками в количестве, указанном пользователем, состоящими из значений соответствующей длины
// Сообщить пользователю какое количество слов какой длины было добавлено. К примеру: 5 words with 10 characters, 7 words with 3 characters etc.
// Сгруппировать слова в объект по количеству значений в строке: { 1: [‘a’, ‘b’, ‘c’, ‘d’], 2: [‘ab’, ‘cd’, ‘ef’, ‘gh’] }

var count = '50'; //var count = prompt('How many words create?');
var min = '3'; //var min = prompt('Minimum characters in a word?');
var max = '10'; //var max = prompt('Maximum characters in a word?');

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var arr = [];
var arr1 = arr;
var maxWord = [];
var obj = {};
var randWord = [];

// function rand() {
//     return Math.round(Math.random() * (+max - +min) + +min);
// }
// console.log(rand()); 
for (i = 0; i < +count; i++ ) {
    arr.push(Math.round(Math.random() * (+max - +min) + +min));   
}
obj[Characters] = arr;



console.log(arr);



// for (i = 0; i < +count; i++ ) {
//     arr1[i] = alphabet[Math.ceil(Math.random() * (alphabet.length - 1))];
// }
// arr1 = arr1.join('');

// for (i = 0; i < arr[i]; i++ ) {
//     obj[arr[i]] = 
// }



for (i = 0; i < arr[i]; i++ ) {
    randWord[i] = alphabet[Math.ceil(Math.random() * (alphabet.length - 1))];
}



obj[arr[0]] = randWord.join('');

// randWord = randWord.join('');

// obj[arr[0]] = randWord;

console.log(obj);

// for (i = 0; i < +count; i++ ){
//     if (arr[i]%min == 0) obj[min] = arr[i];
// }
// console.log(obj);



// for (i = 0; i < +count; i++ ) {
//     arr[i] = 
// }
