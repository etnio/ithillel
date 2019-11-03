//Запросить у пользователя год рождения. 
//Если возраст больше 18 лет - сообщить о доступе к сервису, в противном случае - о запрете. 
//Если пользователю меньше 12 - посоветовать другой сервис. 
//Если пользователь ввел не число - сообщить ему об этом.
//Записать при помощи ternary operators.

var iconSuccess = String.fromCodePoint(0x2705); // Success icon
var iconWrong = String.fromCodePoint(0x274C); // Wrong icon
var year = Number(prompt('Type a year when you was born.')); 
var age = (new Date().getFullYear()) - year;

var wrongMsg = iconWrong + 'Sorry access denied.';
var okMsg = iconSuccess + 'Welcome to service.';
var outMsg = 'Please go to another service.';
var noNumberMsg = 'You typed a not a number.'

isNaN(year) === true ? alert(noNumberMsg) :
year === 0 ? alert(wrongMsg) : 
year < 1890 ? alert(wrongMsg) : 
age > 18 ? alert(okMsg) : 
age < 12 ? alert(outMsg) :
age > 12 && age < 18 ? alert(wrongMsg) :
console.log('Ok');