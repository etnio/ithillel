//Написать опросник для поступления на работу. 
//К примеру, захардкоженные условия требуют, чтобы человек был не младше 30 лет, 
//имел опыт в данной области больше 3-х лет и т.п. 
//Выдать результат: подходит человек на должность, или нет.
//Записать при помощи switch/case.

var READY = "yes";
var READY_SHORT = "y";
var NOT_READY = "no";
var NOT_READY_SHORT = "n";
var DECLINED = null;

var iconSuccess = String.fromCodePoint(0x2705); // Success icon
var iconWrong = String.fromCodePoint(0x274C); // Wrong icon
var name = prompt('Your name'); 
var age = prompt('How old are you?'); 
var en = prompt('Do you know english? (y/n)');
var exp = prompt('Do you have front-end experience? (y/n)');

switch (true) {
    case (exp === READY || exp === READY_SHORT):
        var expYears = prompt('How many years of experience do you have?');
        break;
    default: 
        break;
}

var money = prompt ('What your salary expectations? ($)');

switch (true) {
    case (age >= 25 && expYears >= 3 && (en === READY || en === READY_SHORT) && money <= expYears*500):
        prompt(`${iconSuccess} ${name}, You approach the position. Please type your phone number and we contact you soon.`);
        break;
    default: 
        alert(`${iconWrong} Thank you for your time but you don't match the job requirements of the position.`)
        break;
}