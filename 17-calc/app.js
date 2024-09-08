// Объект для хранения операций
const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b === 0 ? 'Ошибка: деление на ноль' : a / b
};

function calculate(operation) {
    // Получаем значения из полей ввода
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    // Проверяем, существует ли операция и выполняем её
    const result = operations[operation] ? operations[operation](num1, num2) : 'Ошибка: неизвестная операция';

    // Отображаем результат
    document.getElementById('result').textContent = result;

    // Очищаем поля ввода
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
}
