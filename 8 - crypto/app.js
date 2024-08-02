// Функция для шифрования пароля
function encryptPassword(password) {
    const arr = password.split('');
    const n = arr.length;
    let left = 0;
    let right = n - 1;
  
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
  
    return arr.join('');
  }
  
  // Функция для проверки пароля деструктурирующего присваивания
  function checkPassword(encryptedPassword, originalPassword) {
    // Дешифруем пароль
    const decryptedPassword = encryptPassword(encryptedPassword);
    
    // Сравниваем дешифрованный пароль с исходным
    return decryptedPassword === originalPassword;
  }
  
  // Пример использования функций
  const originalPassword = "password";
  const encryptedPassword = encryptPassword(originalPassword);
  console.log('Encrypted Password:', encryptedPassword);
  
  const isPasswordCorrect = checkPassword(encryptedPassword, originalPassword);
  console.log('Is Password Correct:', isPasswordCorrect);
  
// тут я был вынужден был воспользоваться помощью CHATGPT - казалось бы, я обладаю всеми необходимыми знаниями для выполнения задания, однако никак не получалось скомпоновать их, чтобы решить домашку)
// чат с этим помог