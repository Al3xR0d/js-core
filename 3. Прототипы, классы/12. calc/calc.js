class Calc {
  // Пишите код здесь
  constructor(num = 0) {
    this.num = num;
  }

  add(addNum) {
    return new Calc(this.num + addNum);
  }

  sub(subNum) {
    return new Calc(this.num - subNum);
  }

  result() {
    return this.num;
  }
}

export { Calc };
// Для запуска теста вводим в терминале команду: npm run test:current -- calc.test.js
