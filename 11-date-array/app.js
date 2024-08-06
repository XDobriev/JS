function filterArrayDate(arr) {
    const filteredArray = [];

    for (const el of arr) {
        let day, month, year;

        // Проверяем формат DD.MM.YYYY
        if (/^(\d{2})\.(\d{2})\.(\d{4})$/.test(el)) {
            [day, month, year] = el.split('.').map(Number);
        }
        // Проверяем формат MM/DD/YYYY
        else if (/^(\d{2})\/(\d{2})\/(\d{4})$/.test(el)) {
            [month, day, year] = el.split('/').map(Number);
        }
        else {
            continue; // Пропускаем строки, которые не соответствуют ни одному из форматов
        }

        // Проверяем корректность месяца
        if (month < 1 || month > 12) {
            console.log(`Invalid month: ${el}`);
            continue;
        }

        // Проверяем корректность дня в зависимости от месяца и года
        if (!isValidDay(day, month, year)) {
            console.log(`Invalid day: ${el}`);
            continue;
        }

        // Если все проверки пройдены, добавляем дату в отфильтрованный массив
        console.log(`Valid date: ${el}`);
        filteredArray.push(el);
    }

    return filteredArray;
}

// Функция для проверки корректности дня
function isValidDay(day, month, year) {
    const daysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return day >= 1 && day <= daysInMonth[month - 1];
}

// Функция для проверки високосного года
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


// Пример использования
const array = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023', '42.12.2024', '11.01.1999'];
const result = filterArrayDate(array);
console.log(result); 

