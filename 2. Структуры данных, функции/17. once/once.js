const once = (fn) => {
  let called = false;
  let result;

  return function(...args) {
    if (!called) {
      try {
        result = fn(...args);
      } catch (error) {
        throw error;
      } finally {
        called = true;
      }
    }
    return result;
  };
};

export { once };
// Для запуска теста вводим в терминале команду: npm run test:current -- once.test.js
