// Функция для шифрования пароля
function encryptPassword(password) {
    const chars = password.split('');
    const n = chars.length;
    const mid = Math.floor(n / 2);
  
    // Меняем местами символы по заданному алгоритму
    const firstHalf = chars.slice(0, mid).reverse();
    const secondHalf = chars.slice(mid).reverse();
  
    if (n % 2 !== 0) {
      // Если количество символов нечетное, середину не меняем
      secondHalf.push(chars[mid]);
    }
  
    const encryptedChars = secondHalf.concat(firstHalf);
    return encryptedChars.join('');
  }

  
// Функция для проверки пароля
function checkPassword(originalPassword, encryptedPassword) {
    const decryptedPassword = encryptPassword(encryptedPassword);
    return originalPassword === decryptedPassword;
  }

// Пример использования
  const originalPassword = 'mypassword';
  const encryptedPassword = encryptPassword(originalPassword);
  console.log('Encrypted Password:', encryptedPassword);
  
  const isPasswordCorrect = checkPassword(originalPassword, encryptedPassword);
  console.log('Is Password Correct:', isPasswordCorrect); // true
  
  // Пример использования с результатом false
  const wrongPassword = 'wrongpassword';
  const isWrongPasswordCorrect = checkPassword(originalPassword, encryptPassword(wrongPassword));
  console.log('Is Wrong Password Correct:', isWrongPasswordCorrect); // false
  

  
// тут я был вынужден был воспользоваться помощью CHATGPT - казалось бы, я обладаю всеми необходимыми знаниями для выполнения задания, однако никак не получалось скомпоновать их, чтобы решить домашку)
// чат с этим помог