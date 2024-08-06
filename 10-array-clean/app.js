// Функции высшего порядка
function filterArray(arr, deleteFunc) {
    const result = [];
    for (const el of arr) {
        if (!deleteFunc(el)) {
            result.push(el);
        }
    }
    return result;
}

function deleteIfGreaterThanFive(num) {
    return num > 5;
}

const array = [3, 6, 9, 2];
const filteredArray = filterArray(array, deleteIfGreaterThanFive);
console.log(filteredArray); // [3, 2]
