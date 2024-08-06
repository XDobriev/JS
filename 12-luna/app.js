function isCardNumCorrect(cardNumber) {
    console.log(`Исходный номер карты: ${cardNumber}`);
    
    // Очистка строки от лишних символов
    const cleanedNumber = cardNumber.replaceAll('-', '');
    console.log(`Очистенный номер карты: ${cleanedNumber}`);
    
    // Проверка корректности строки: должна содержать только цифры
    for (let char of cleanedNumber) {
        if (isNaN(char)) {
            console.log(`Найдён некорректный символ: ${char}`);
            return false;
        }
    }
    
    const digits = cleanedNumber.split('').map(Number);
    console.log(`Массив цифр: ${digits}`);

    const n = digits.length;
    let sum = 0;

    // Применение алгоритма Луна
    for (let i = 0; i < n; i++) {
        let digit = digits[n - 1 - i]; // Обрабатываем цифры с конца
        console.log(`Обрабатываем цифру на позиции ${n - 1 - i} (с конца): ${digit}`);
        
        if (i % 2 === 1) { // Каждая вторая цифра, начиная с конца
            console.log(`Исходное значение цифры: ${digit}`);
            digit *= 2;
            console.log(`Удвоенное значение цифры: ${digit}`);
            if (digit > 9) {
                digit -= 9;
                console.log(`Скорректированное значение цифры (если больше 9): ${digit}`);
            }
        }
        sum += digit;
        console.log(`Текущая сумма: ${sum}`);
    }

    // Проверка, делится ли сумма на 10 без остатка
    const isValid = sum % 10 === 0;
    console.log(`Итоговая сумма: ${sum}`);
    console.log(`Номер карты ${isValid ? 'валидный' : 'некорректный'}`);

    return isValid;
}

// Пример использования функции
const cardNumber = "4561-1213-4367-2612";
console.log(isCardNumCorrect(cardNumber)); // true или false в зависимости от корректности номера карты
