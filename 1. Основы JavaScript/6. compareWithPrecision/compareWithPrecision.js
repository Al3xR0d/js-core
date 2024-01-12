function compareWithPrecision(a, b, precision) {
  // Пишите код здесь
  return Math.abs(a - b) == precision
}

module.exports = compareWithPrecision;

// Для запуска теста вводим в терминале команду: npm run test:current -- compareWithPrecision.test.js
