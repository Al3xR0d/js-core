function invert(obj) {
  // Пишите код здесь
  if (Object.entries(obj).length === 0) return {};
  let arr = Object.entries(obj).map(items => items.reverse());
  let newObj = new Map(arr);
  return Object.fromEntries(newObj);
}

export { invert };
// Для запуска теста вводим в терминале команду: npm run test:current -- invert.test.js
