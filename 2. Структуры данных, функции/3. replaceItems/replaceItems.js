function replaceItemsClear(arr, item, replaceItem) {
  // Пишите код здесь
  return arr.map(value => (value === item ? replaceItem : value));
}

function replaceItemsMutate(arr, item, replaceItem) {
  // Пишите код здесь
  arr.forEach((value, i) => {
    if (value === item) arr[i] = replaceItem;
  });
  return arr;
}

export { replaceItemsClear, replaceItemsMutate };
// Для запуска теста вводим в терминале команду: npm run test:current -- replaceItems.test.js
