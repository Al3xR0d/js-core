const moveToStart = (arr, n) => {
  // Пишите код здесь
  if (arr.length <= n) {
    return arr;
  } else {
    let startArr = arr.slice(arr.length - n);
    let endArr = arr.slice(0, arr.length - n);
    return startArr.concat(endArr);
};
}
export { moveToStart };
// Для запуска теста вводим в терминале команду: npm run test:current -- moveToStart.test.js
