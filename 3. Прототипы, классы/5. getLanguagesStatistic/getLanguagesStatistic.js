const getLanguagesStatistic = (data) => {
  // Пишите код здесь
  let filterArr = data.filter(function(item) {
    return item.year === 2023;
  });
  let languageArr = filterArr.map(item => item.language);
  let obj = {};
  for (let item of languageArr) {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
  }
  return obj;
};

export { getLanguagesStatistic };
// Для запуска теста вводим в терминале команду: npm run test:current -- getLanguagesStatistic.test.js
