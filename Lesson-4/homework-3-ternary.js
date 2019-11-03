// Модифицировать скрипт конвертации валюты. 
// Выбрать валюту в которую будут конвертироваться деньги. 
// После чего спросить пользователя в какую валюту будет производиться перевод. 
// В соответствии с выбором конвертировать значение.
//Записать при помощи ternary operators.

var iconWrong = String.fromCodePoint(0x274C); // Wrong icon

var currency = prompt('Choose currency (USD, EUR, GBP)');
var sum = prompt('Type sum for converting');
var usd = 24.6;
var eur = 27.19;
var gbp = 30.96;

var uah = (sum * usd).toFixed(2);
var uah = (sum * eur).toFixed(2);
var uah = (sum * gbp).toFixed(2);
var uahUsdMsg = sum + ' USD = ' + uah + ' UAH';
var uahEurMsg = sum + ' EUR = ' + uah + ' UAH';
var uahGbpMsg = sum + ' GBP = ' + uah + ' UAH';
var noNumberMsg = iconWrong + 'The sum is not a number';
var wrongMsg = iconWrong + ' Error';

isNaN(sum) === true ? alert(noNumberMsg) :
currency === 'USD' || currency === 'usd' ? alert(uahUsdMsg) : 
currency === 'EUR' || currency === 'eur' ? alert(uahEurMsg) : 
currency === 'GBP' || currency === 'gbp' ? alert(uahGbpMsg) : 
alert(wrongMsg);

