export const sequenceSum = (begin, end) => {
  // Пишите код здесь
  if (begin > end || typeof begin !== "number" || typeof end !== "number") {
    return NaN;
  } else {
    function getSum(begin) {
      return begin === end ? begin : begin + getSum(begin + 1);
    }
    return getSum(begin);
  }
};
// Для запуска теста вводим в терминале команду: npm run test:current -- sequenceSum.test.js
