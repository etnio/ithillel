// var char = String.fromCharCode(34);
// console.log(char);
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var amount = 100,
    min = 2,
    max = 10,
    alphabet = 'abcdefghijklmnopqrstuvwxyz',
    dictionary = {};

for (i = 0; i < amount; i++) {
    var word = '';
    var lettersAmount = getRandom(min, max);
    
    for (n = 0; n < lettersAmount; n++) {
        var character = alphabet[getRandom(0, alphabet.length - 1)]; 
        word += character;  
    }

    // dictionary[lettersAmount] = dictionary[lettersAmount] ?
    //     dictionary[lettersAmount].concat([word]) : 
    //     [word]

    // if (dictionary[lettersAmount]) {
    //     dictionary[lettersAmount].push(word)
    // } else {
    //     dictionary[lettersAmount] = [];
    //     dictionary[lettersAmount].push(word);
    // }

    if (!dictionary[lettersAmount]) {
        dictionary[lettersAmount] = [];
    } 
    dictionary[lettersAmount].push(word);
    
}

//for 
for (var key in dictionary) { 
	console.log(dictionary[key].length + ' words with ' + key + ' characters');
}
console.log(dictionary);