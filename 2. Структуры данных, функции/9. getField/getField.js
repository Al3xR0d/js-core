const getField = (data, field) => {
  // Пишите код здесь
  if (data === undefined) {
    return [];
  } else return data.map(item => item[field]);
};

export { getField };
// Для запуска теста вводим в терминале команду: npm run test:current -- getField.test.js
