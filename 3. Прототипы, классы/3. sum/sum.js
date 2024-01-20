const sum = (...nums) => {
  // Пишите код здесь
  if (nums.length === 0) return 0;
  else {
    return nums.filter(item => +item).reduce((acc, item) => {
      item = +item;
      return acc + item;
    }, 0);
  }
};

export { sum };
// Для запуска теста вводим в терминале команду: npm run test:current -- sum.test.js
