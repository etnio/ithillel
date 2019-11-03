// Модифицировать скрипт конвертации валюты. 
// Выбрать валюту в которую будут конвертироваться деньги. 
// После чего спросить пользователя в какую валюту будет производиться перевод. 
// В соответствии с выбором конвертировать значение.
//Записать при помощи switch/case.

var iconWrong = String.fromCodePoint(0x274C); // Wrong icon

var currency = prompt('Choose currency (USD, EUR, GBP)');
var sum = prompt('Type sum for converting');
var usd = 24.6;
var eur = 27.19;
var gbp = 30.96;


switch (true) {
    case (isNaN(sum) === true):
        alert(`${iconWrong} The sum is not a number`);
        exit();
        break;
    case(currency === 'USD' || currency === 'usd'):
        var uah = sum * usd;
        uah = uah.toFixed(2);
        alert(`${sum} USD = ${uah} UAH`)
        break;
    case(currency === 'EUR' || currency === 'eur'):
        var uah = sum * eur;
        uah = uah.toFixed(2);
        alert(`${sum} EUR = ${uah} UAH`);
        break;
    case(currency === 'GBP' || currency === 'gbp'):
        var uah = sum * gbp;
        uah = uah.toFixed(2);
        alert(`${sum} GBP = ${uah} UAH`);
        break;
    default: 
        alert(`${iconWrong} You type wrong currency code`);
        break;
}

