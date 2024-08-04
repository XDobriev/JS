/* Написать функцию, которая получается на вход строку с:
- суммой средств - 1000
- валютой средств - руб
- целевой валютой - $
Возвращает число в новой валюте, если конвертация
поддерживается, или null, если нет. Ставки конвертации хранятся
внутри функции */


function converter (sum, currency = 'rub', newCurrency) {
    switch(true) {
        case newCurrency === 'USD':
            return indexUSD(sum);
        case newCurrency === 'AED': // Дирхам ОАЭ
            return indexAED(sum);
        case newCurrency === 'Ethereum': //Эфир - криптовалята 
            return indexEthereum(sum);
        default:
            return null;
    }
    
}



function indexUSD(sum) {
    return sum * 0.01122;
}
function indexAED(sum) {
    return sum * 0.041207;
}
function indexEthereum(sum) {
    return sum * 0.000006;
}



console.log(converter(100, 'rub', 'USD'));
console.log(converter(100, 'rub', 'AED'));
console.log(converter(100, 'rub', 'Ethereum'));