function partition(array, callback) {
  // Пишите код здесь
  let trueArray = [];
  let falseArray = [];
  array.forEach((el, i) => {
    if (callback === undefined) {
      if (!!array[i]) {
        trueArray.push(array[i]);
      } else {
        falseArray.push(array[i]);
      }
    } else if (!!callback(array[i])) {
      trueArray.push(array[i]);
    } else {
      falseArray.push(array[i]);
    }
  });
  return [trueArray, falseArray];
}

export { partition };
// Для запуска теста вводим в терминале команду: npm run test:current -- partition.test.js
