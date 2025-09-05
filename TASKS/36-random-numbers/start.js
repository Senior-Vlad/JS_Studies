/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1000;
const MAX = 9999;

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// let counter = 0; //optional
// function appendArray(arr, min, max) {
//   counter++; //optional
//   console.log(counter, "try"); //optional
//   let num = randomNumber(min, max);
//   const referenceArray = [...arr];
//   if (!referenceArray.includes(num)) {
//     referenceArray.push(num);
//     return referenceArray;
//   } else {
//     return appendArray(referenceArray, MIN, MAX);
//   }
// }

let counter = 0; //optional
function appendArray(arr, min, max) {
  counter++;
  console.log(counter, "try"); //optional
  const used = new Set(arr);
  let num;
  do {
    num = randomNumber(min, max);
  } while (used.has(num));
  return [...arr, num];
}

// const newRandomNumber = randomNumber(MIN, MAX);
const updatedNumbers = appendArray(myNumbers, MIN, MAX);
console.log(`Original array: ${myNumbers}\nNew array: ${updatedNumbers}`);

/*
function randomNumber(min, max) {
  return Math.floor(Math.random() * (3 - 0 + 1) + 0);
}
let counter = 0;
function appendArray(arr, num) {
  counter++;
  console.log("try " + counter);
  if (!myNumbers.includes(num)) {
    myNumbers.push(num);
    console.log(myNumbers);
  } else {
    num = randomNumber(MIN, MAX);
    appendArray(myNumbers, num);
  }
}
   */
