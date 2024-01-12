function findAllIndices(arr, value) {
  // Пишите код здесь
  const resArr = [];
  arr.forEach((item, index, arr) => {
    if (item === value) {
      resArr.push(index);
    }
  });
  return resArr;
}

export { findAllIndices };
// Для запуска теста вводим в терминале команду: npm run test:current -- findAllIndices.test.js
