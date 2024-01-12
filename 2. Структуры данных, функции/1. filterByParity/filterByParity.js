const filterByParity = (numbers, parity) => {
  // Пишите код здесь
  if (parity === "odd") {
    return numbers.filter(a => a % 2 !== 0);
  } else return numbers.filter(a => a % 2 === 0);
};

export { filterByParity };
// Для запуска теста вводим в терминале команду: npm run test:current -- filterByParity.test.js
