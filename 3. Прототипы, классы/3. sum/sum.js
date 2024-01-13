const sum = (...nums) => {
  // Пишите код здесь
  if (nums.length === 0) return 0;
  else {
    let newNums = nums.map(item => +item).filter(item => !!item);
    return newNums.reduce((sum, item) => {
      return sum + item;
    }, 0);
  }
};

export { sum };
// Для запуска теста вводим в терминале команду: npm run test:current -- sum.test.js
