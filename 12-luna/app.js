function isCardNumCorrect(cardNumber) {
    // Очистка строки от лишних символов
    const cleanedNumber = cardNumber.replaceAll('-', '');
    // Проверка корректности строки: должна содержать только цифры
    for (let char of cleanedNumber) {
        if (isNaN(char)) {
            console.log(`Найдён некорректный символ: ${char}`);
            return false;
        }
    }
    const digits = cleanedNumber.split('').map(Number);
    const n = digits.length;
    let sum = 0;
    // Применение алгоритма Луна
    for (let i = 0; i < n; i++) {
        let digit = digits[n - 1 - i]; // Обрабатываем цифры с конца
        if (i % 2 === 1) { // Каждая вторая цифра, начиная с конца
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    // Проверка, делится ли сумма на 10 без остатка
    const isValid = sum % 10 === 0;
    console.log(`Итоговая сумма: ${sum}`);
    console.log(`Номер карты ${isValid ? 'валидный' : 'некорректный'}`)
    return isValid;
}

// Пример использования функции
const cardNumber = "4561-1213-4367-2612";
const fixedCardNumber = "4561-1213-4367-2611"
console.log(isCardNumCorrect(cardNumber)); // true или false в зависимости от корректности номера карты
console.log(isCardNumCorrect(fixedCardNumber)); // true или false в зависимости от корректности номера карты
