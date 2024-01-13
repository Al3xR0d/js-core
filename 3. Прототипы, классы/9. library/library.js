function Book(name, author, year) {
  // Пишите код здесь
  this.name = name;
  this.author = author;
  this.year = year;
  this.reader = null;
}

Book.prototype.isAvailable = function() {
  return !this.reader;
};

Book.prototype.takeBook = function(readerName) {
  if (this.reader) return false;
  else {
    this.reader = readerName;
    return true;
  }
};

Book.prototype.returnBook = function() {
  if (this.reader) {
    this.reader = null;
    return true;
  }
  return false;
};

Book.prototype.changeBookName = function(newBookName) {
  if (this.name === newBookName) return false;
  else {
    this.name = newBookName;
    return true;
  }
};

Book.prototype.changeAuthorName = function(newAuthorName) {
  if (this.author === newAuthorName) return false;
  else {
    this.author = newAuthorName;
    return true;
  }
};

Book.prototype.getCurrentReader = function() {
  return this.reader;
};

export { Book };
// Для запуска теста вводим в терминале команду: npm run test:current -- library.test.js
