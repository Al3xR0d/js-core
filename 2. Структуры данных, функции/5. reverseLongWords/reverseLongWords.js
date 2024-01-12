const reverseLongWords = (str, n) => {
  // Пишите код здесь
  let word = str.split(" ");
  const reverseWord = word
    .map(el => {
      if (el.length >= n) {
        return el.split("").reverse().join("");
      }
      return el;
    })
    .join(" ");

  return reverseWord;
};

module.exports = reverseLongWords;

// Для запуска теста вводим в терминале команду: npm run test:current -- reverseLongWords.test.js
