function invert(obj) {
  // Пишите код здесь
  let newObj = {};
  for (let key in obj) {
    let value = obj[key];
    newObj[value] = key;
  }
  return newObj;
}

export { invert };
// Для запуска теста вводим в терминале команду: npm run test:current -- invert.test.js
