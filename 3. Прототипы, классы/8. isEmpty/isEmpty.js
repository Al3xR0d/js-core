function isEmpty(obj) {
  // Пишите код здесь
  return Object.values(obj).length == 0;
}

function isEmptyWithProtos(obj) {
  // Пишите код здесь
  if (Object.getOwnPropertyNames(obj).length > 0) return false;
  const proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  return isEmptyWithProtos(proto);
}

export { isEmpty, isEmptyWithProtos };
// Для запуска теста вводим в терминале команду: npm run test:current -- isEmpty.test.js
