function capitalize(str) {
  // Пишите код здесь
  let space = str.toLowerCase().split(" ");

  for (let i = 0; i < space.length; i++) {
    space[i] = space[i][0].toUpperCase() + space[i].slice(1);
  }
  return space.join(" ");
}

module.exports = capitalize;

// Для запуска теста вводим в терминале команду: npm run test:current -- capitalize.test.js
