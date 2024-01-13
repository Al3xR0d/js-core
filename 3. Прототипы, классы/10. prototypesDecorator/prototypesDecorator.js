class Addition {
  constructor(num) {
    this.num = num;
  }

  add(...nums) {
    const sum = (a, b) => a + b;
    return this.num + nums.reduce(sum);
  }
}

// Пишите код здесь

let addWithLog = Addition.prototype.add;

Addition.prototype.add = function(...nums) {
  console.log("called");
  return addWithLog.call(this, ...nums);
};

export { Addition };
// Для запуска теста вводим в терминале команду: npm run test:current -- prototypesDecorator.test.js
