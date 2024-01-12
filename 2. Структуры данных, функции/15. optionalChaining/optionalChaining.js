function optionalChaining(obj, chain) {
  // Пишите код здесь
  let key = chain.shift(),
    value = obj[key];
  if (chain.length == 0) return obj.hasOwnProperty(key) ? value : undefined;
  return value instanceof Object ? optionalChaining(value, chain) : undefined;
}

export { optionalChaining };
// Для запуска теста вводим в терминале команду: npm run test:current -- optionalChaining.test.js
