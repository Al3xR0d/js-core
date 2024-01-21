const merge = (...objs) => {
  // Пишите код здесь
  let newArr = objs.filter(function(item) {
    return typeof item === "object";
  });
  if (newArr.length === 0) return {};
  return newArr.reduce((acc, item) => {
    return (acc = Object.assign(acc, item));
  }, {});
};

export { merge };
// Для запуска теста вводим в терминале команду: npm run test:current -- merge.test.js
