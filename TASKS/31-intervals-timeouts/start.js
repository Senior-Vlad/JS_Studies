/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

let count = 1;
// const intervalCounter = setInterval(() => {
//   console.log(`Сообщение номер ${count}`);
//   count++;
//   if (count > 5) {
//     clearInterval(intervalCounter);
//   }
// }, 2000);

const intervalCounter = setInterval(() => {
  console.log(`Сообщение номер ${count}`);
  count++;
}, 2000);
setTimeout(() => {
  clearInterval(intervalCounter);
}, 10100);
