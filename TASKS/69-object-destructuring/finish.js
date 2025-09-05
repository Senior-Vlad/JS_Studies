/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  q: 3,
};

// function mult({ x, y, q: z }) {
//   return x * y * z;
// }
// function mult(object) {
//   const { x, y, q: z } = object;
//   return x * y * z;
// }
function mult() {
  // console.log(arguments[0]);
  const { x, y, q: z } = arguments[0];
  return x * y * z;
}
// Создайте функцию здесь

const result = mult(objectWithNumbers);
console.log(result);
// 300
