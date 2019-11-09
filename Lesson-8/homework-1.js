// Переписать задание с генерацией рандомных слов с помощью ф-й

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

function getWord(){
    var characters = getRandom(min, max);
    var word = [];
    for (n = 0; n < characters; n++) {
        var symbol = alphabet[getRandom(0, alphabet.length - 1)]; 
        word.push(symbol);    
    }
    return word = word.join(''); 
}


for (i = 0; i < wordsAmount; i++) {
    array.push(getWord());  
    if (obj[array[i].length]) {
        obj[array[i].length].push(array[i]);
    } else {obj[array[i].length] = [array[i]] }  
}

for(var characters in obj) { // 2
	console.log(obj[characters].length + ' words with ' + characters + ' characters');
}


console.log(array);
console.log(obj);