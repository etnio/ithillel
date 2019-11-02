//Запросить у пользователя год рождения. 
//Если возраст больше 18 лет - сообщить о доступе к сервису, в противном случае - о запрете. 
//Если пользователю меньше 12 - посоветовать другой сервис. 
//Если пользователь ввел не число - сообщить ему об этом.
//Записать при помощи if/else.

var iconSuccess = String.fromCodePoint(0x2705); // Success icon
var iconWrong = String.fromCodePoint(0x274C); // Wrong icon
var year = Number(prompt('Type a year when you was born.')); 

if (year === 0){
    alert(`${iconWrong} Sorry access denied.`);
    exit();
}

var age = (new Date().getFullYear()) - year;

if (age > 18){
    alert(`${iconSuccess} Welcome to service.`);
} else if (age < 12 ){
    alert('Please go to another service.');
} else if (isNaN(year) === true) {
    alert(`${iconWrong} You typed a not a number.`);
} else if(age > 12 && age < 18){
    alert(`${iconWrong} Sorry access denied.`)
}

