const getArraysCounts = (arr) => {
  // Пишите код здесь
  return arr.reduce((map, item) => {
    if (!map.has(item)) map.set(item, 0);
    return map.set(item, map.get(item) + 1);
  }, new Map());
};

export { getArraysCounts };
// Для запуска теста вводим в терминале команду: npm run test:current -- getArraysCounts.test.js
