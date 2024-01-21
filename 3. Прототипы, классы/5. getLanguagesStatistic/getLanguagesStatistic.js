const getLanguagesStatistic = (data) => {
  // Пишите код здесь
  return data.filter(item => item.year === 2023).reduce((acc, item) => {
    acc[item.language] = acc[item.language] ? acc[item.language] + 1 : 1;
    return acc;
  }, {});
};

export { getLanguagesStatistic };
// Для запуска теста вводим в терминале команду: npm run test:current -- getLanguagesStatistic.test.js
