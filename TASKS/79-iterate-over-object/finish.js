/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

function sumObjectValues(object) {
  let sum = 0;
  for (let el in object) {
    sum += typeof object[el] === "number" ? object[el] : 0;
  }
  return sum;
}

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: "string",
  d: 12,
};

// Создайте функцию здесь

const result = sumObjectValues(objectWithNumbers);
console.log(result);
//42
