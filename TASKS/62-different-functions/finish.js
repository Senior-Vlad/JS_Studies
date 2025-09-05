/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */
// console.log(firstFunction(5, 10)); can be accessed and will output 15
function firstFunction(a, b) {
  return a + b;
}

// firstFunction can be overwritten
// function firstFunction(a, b) {
//   return (a + b) * 2;
// }
// secondFunction(5, 10); cannot be accessed
const secondFunction = function (a, b) {
  return a + b;
};

// secondFunction cannot be overwritten
// secondFunction = function (a, b) {
//   return (a + b) * 2;
// };
//TypeError: Assignment to constant variable.

console.log(firstFunction(5, 10), secondFunction(5, 10));
firstFunction;
secondFunction;
