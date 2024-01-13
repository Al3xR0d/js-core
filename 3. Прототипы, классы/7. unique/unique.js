const unique = (arr) => {
  // Пишите код здесь
  let newArr = new Set();
  arr.map(item => newArr.add(item));
  return [...newArr];
};

export { unique };
// Для запуска теста вводим в терминале команду: npm run test:current -- unique.test.js
