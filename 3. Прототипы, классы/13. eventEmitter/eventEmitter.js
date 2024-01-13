class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  off(eventName, callback) {
    let index = this.events[eventName].indexOf(callback);
    if (index > -1) {
      this.events[eventName].splice(index, 1);
    }
  }

  once(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    let once = () => {
      callback();
      this.off(eventName, once);
    };
    this.events[eventName].push(once);
  }

  emit(eventName, ...args) {
    this.events[eventName].forEach(item => {
      item.apply(null, args);
    });
  }
}

class BroadcastEventEmitter extends EventEmitter {
  emit(eventName, ...args) {
    eventName = Object.keys(this.events);
    eventName.forEach(item => super.emit(item, ...args));
  }
}

export { BroadcastEventEmitter, EventEmitter };
// Для запуска теста вводим в терминале команду: npm run test:current -- EventEmitter.test.js
