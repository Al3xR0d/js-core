const hasArrays = (values) => {
  // Пишите код здесь
  return values.filter(el => Array.isArray(el)).length > 0
};

export { hasArrays };
// Для запуска теста вводим в терминале команду: npm run test:current -- hasArrays.test.js
