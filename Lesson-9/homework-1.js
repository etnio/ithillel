// Ваша команда пишет текстовый редактор. Вам приходят уже разобранные строки в массив.
// Задача: вывести на экран последовательность и значение строки в новом массиве:
// number([]) // => []
// number(['a', 'b', 'c']) // => ['1: a', '2: b', '3: c']

function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

arrayInitial = [];

for (i = 0; i < rand(50, 100); i++) {
    var str = '';
    var amountCharactersInString = rand(1, 9)
    for (n = 0; n < amountCharactersInString; n++) {
        var char = String.fromCodePoint('0x1F3' + rand(3, 8) + rand(0, 9)); 
        str += char;
    }
    arrayInitial.push(str);
}
console.log(arrayInitial);


// The solution

arrayNew = [];
for (i = 0; i < arrayInitial.length; i++) {
    arrayNew.push(i+1 + ': ' + arrayInitial[i]);
}
console.log(arrayNew);