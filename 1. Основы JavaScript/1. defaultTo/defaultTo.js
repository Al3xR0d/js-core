const defaultTo = (value, defaultValue) => {
  // Пишите код здесь
  if (value == null || value == undefined || Number.isNaN(value)) {
    return defaultValue;
  }
    return value;
};

module.exports = defaultTo;

// Для запуска теста вводим в терминале команду: npm run test:current -- defaultTo.test.js
