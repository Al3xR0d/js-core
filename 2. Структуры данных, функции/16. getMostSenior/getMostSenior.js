const getMostSenior = (humans) => {
  // Пишите код здесь
  let ageArr = [];
  let finalArr = [];
  if (humans === undefined || humans === null) {
    return [];
  }
  humans.filter(item => item.age).map((item, index, arr) => {
    ageArr.push(item.age);
  });

  function getMaxOfArray(ageArr) {
    return Math.max.apply(null, ageArr);
  }

  ageArr.map((item, index, arr) => {
    if (item === getMaxOfArray(ageArr)) {
      finalArr.push(humans[index]);
    }
  });

  return finalArr;
};

export { getMostSenior };
// Для запуска теста вводим в терминале команду: npm run test:current -- getMostSenior.test.js
