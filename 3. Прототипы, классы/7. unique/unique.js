const unique = (arr) => {
  // Пишите код здесь
  return Array.from(new Set(arr));
};

export { unique };
// Для запуска теста вводим в терминале команду: npm run test:current -- unique.test.js
