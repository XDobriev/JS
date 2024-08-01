
// Функция для сортировки массива чисел по возрастанию и убыванию
function sortArray(arr, order) {
    const n = arr.length;
  
    // Проходим по массиву для сортировки
    for (let i = 0; i < n - 1; i++) {
      // Внутренний цикл для сравнения и обмена элементов
      for (let j = 0; j < n - i - 1; j++) {
        // Сравнение и обмен элементов в зависимости от порядка
        if ((order === 'ascending' && arr[j] > arr[j + 1]) ||
            (order === 'descending' && arr[j] < arr[j + 1])) {
          // Меняем элементы местами
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  
    return arr;
  }
  
  // Пример использования функции
  const numbers = [1, 40, -5, 10, 0];
  console.log('Original array:', numbers);
  
  // Сортировка по возрастанию
  const sortedAscending = sortArray([...numbers], 'ascending');
  console.log('Sorted ascending:', sortedAscending);
  
  // Сортировка по убыванию
  const sortedDescending = sortArray([...numbers], 'descending');
  console.log('Sorted descending:', sortedDescending);
  