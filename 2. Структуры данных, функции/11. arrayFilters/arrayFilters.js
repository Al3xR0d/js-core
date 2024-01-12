const inRange = (a, b) => {
  // Пишите код здесь
  return num => {
    if (a > b) return false;
    return num >= a && num <= b;
  };
};

const inArray = (arr) => {
  // Пишите код здесь
  return item => arr.includes(item);
};

const notInArray = (arr) => {
  // Пишите код здесь
  return item => !arr.includes(item);
};

export { inArray, inRange, notInArray };
// Для запуска теста вводим в терминале команду: npm run test:current -- arrayFilters.test.js
