/** ЗАДАЧА 42 - Проверка сортировки массива
 *
 * 1. Создайте функцию "arraySortInfo" с одним параметром - "inputArray"
 *
 * 2. Если хотя бы один элемент в массиве не является числом - вернуть "Некоторые элементы не являются числами"
 *
 * 3. Если числа в массиве отсортированы по возрастанию - вернуть "Массив отсортирован по возрастанию"
 *
 * 4. Если числа в массиве отсортированы по убыванию - вернуть "Массив отсортирован по убыванию".
 *
 * 5. Если массив не отсортирован - вернуть "Массив не отсортирован"
 */

function arraySortInfo(inputArray) {
  //   if (inputArray.some((element) => typeof element !== "number"))
  //     return "Some elements are not numbers";
  if (!inputArray.every(Number.isInteger))
    return "Some elements are not numbers";

  const compareArray = [...inputArray].sort((a, b) => b - a);
  console.log(compareArray);

  if (JSON.stringify(compareArray) === JSON.stringify(inputArray))
    return "Массив отсортирован по убыванию";

  if (JSON.stringify(compareArray.reverse()) === JSON.stringify(inputArray))
    return "Массив отсортирован по возрастанию";

  return "Массив не отсортирован";

  //   if (
  //     inputArray.every((element, index) => {
  //       return element <= inputArray[index - 1] || index === 0; // index === 0 for skipping the first element verification
  //     })
  //   )
  //     return "Массив отсортирован по убыванию";

  //   if (
  //     inputArray.every((element, index) => {
  //       return element >= inputArray[index - 1] || index === 0;
  //     })
  //   )
  //     return "Массив отсортирован по возростанию";

  //   return "Массив не отсортирован";
}

const a = [5, "", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];
// b = b.sort((a, b) => b - a);
// console.log(b);

console.log(arraySortInfo(a)); // Некоторые элементы не являются числами
console.log(arraySortInfo(b)); // Массив отсортирован по возрастанию
console.log(arraySortInfo(c)); // Массив отсортирован по убыванию
console.log(arraySortInfo(d)); // Массив не отсортирован

/**
 * ПОДСКАЗКИ
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Подсказка 1: Используйте метод массивов "every"
 * Подсказка 2: Вы должны использовать два параметра в колбэк функции "element", "index"
 * Подсказка 3: Каждый элемент массива, кроме первого, следует сравнивать с предыдущим
 */
