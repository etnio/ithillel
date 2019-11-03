//Запросить у пользователя год рождения. 
//Если возраст больше 18 лет - сообщить о доступе к сервису, в противном случае - о запрете. 
//Если пользователю меньше 12 - посоветовать другой сервис. 
//Если пользователь ввел не число - сообщить ему об этом.
//Записать при помощи switch/case.

var iconSuccess = String.fromCodePoint(0x2705); // Success icon
var iconWrong = String.fromCodePoint(0x274C); // Wrong icon
var year = Number(prompt('Type a year when you was born.')); 
var age = (new Date().getFullYear()) - year;

switch (true) {
    case (year === 0):
        alert(`${iconWrong} Sorry access denied.`); //Sorry Jesus ;)
        exit();
        break;
    case (year < 1890):
        alert(`${iconWrong} Sorry access denied.`); //Validation of real year birthday
        exit();
         break;  
    case (age > 18):
        alert(`${iconSuccess} Welcome to service.`);
        break;
    case (age  < 12):
        alert('Please go to another service.');
        break;
    case (isNaN(year) === true):
        alert(`${iconWrong} You typed a not a number.`);
        break;
    case (age > 12 && age < 18):
        alert(`${iconWrong} Sorry access denied.`);
        break;
    default: 
        break;
}



