function deepEqual(obj1, obj2) {
  // Пишите код здесь
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  )
    return obj1 === obj2;
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  // console.log(keys1);
  // console.log(keys2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  return keys1.every(
    key => keys2.includes(key) && deepEqual(obj1[key], obj2[key])
  );
}

export { deepEqual };
// Для запуска теста вводим в терминале команду: npm run test:current -- deepEqual.test.js
