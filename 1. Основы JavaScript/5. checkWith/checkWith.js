const checkWith = (value, checkFunc) => {
  // Пишите код здесь
  return !!checkFunc(value)
};

export { checkWith };
// Для запуска теста вводим в терминале команду: npm run test:current -- checkWith.test.js
