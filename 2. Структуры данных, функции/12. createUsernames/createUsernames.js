const createUsernames = (data) => {
  // Пишите код здесь
  return data.map(element => {
    const map = new Map(Object.entries(element));
    element.username =
      map.get("firstName").toLowerCase() +
      map.get("lastName")[0].toLowerCase() +
      (new Date().getFullYear() - map.get("age"));
    return element;
  });
};

export { createUsernames };
// Для запуска теста вводим в терминале команду: npm run test:current -- createUsernames.test.js
