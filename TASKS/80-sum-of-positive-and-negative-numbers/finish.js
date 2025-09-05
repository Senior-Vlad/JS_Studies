/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

// function sumPositiveNegative(arr) {
//   let positive = 0;
//   let negative = 0;
//   for (let num of arr) {
//     positive += num >= 0 ? num : 0;
//     negative += num < 0 ? num : 0;
//   }
//   return { positive, negative };
// }

function sumPositiveNegative(arr) {
  return arr.reduce(
    (sum, value) => {
      return value >= 0
        ? { ...sum, positive: sum.positive + value }
        : { ...sum, negative: sum.negative + value };
    },
    { positive: 0, negative: 0 }
  );
}

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Создайте функцию "sumPositiveNegative" здесь

const result = sumPositiveNegative(nums);

console.log(result);
// { positive: 74, negative: -54 }
