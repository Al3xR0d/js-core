function wrapInParagraph(text) {
  // Пишите код здесь
  let arrText = text.split("\n");
  let newText = arrText.map(function(item, index, array) {
    return "<p>" + item + "</p>" + "\n";
  });
  return newText.join("").trimEnd();
}

module.exports = wrapInParagraph;

// Для запуска теста вводим в терминале команду: npm run test:current -- wrapInParagraph.test.js
