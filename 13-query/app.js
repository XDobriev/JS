// 13.13. Домашнее задание - Объекты
//нужно обойти объект с помощью for in
//собрать данные и объединить в строку

const parametrs = {
    search: 'Вася',
    take: 10,
}

//search=Вася&take=10
// Вариант 1
function addQueryParameters (object) {
    let result = [];
    for (const key in object) {
        result.push(`${key}=${object[key]}`)
    }    
    return result.join('&')
}

//Вариант 2
function addQueryParameters2(object) {
    return Object.keys(object)
        .map(key => `${key}=${object[key]}`)
        .join('&');
}

console.log(addQueryParameters(parametrs));
console.log(addQueryParameters2(parametrs));