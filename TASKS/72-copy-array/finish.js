/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

const a = [1, 2, 3];

// const b = a.map((value) => value);

// const b = [...a];

// const b = a.slice();

// const b = Array.from(a);

// const b = JSON.parse(JSON.stringify(a));

const b = structuredClone(a); // Node.js

// Напишите код здесь

b.push("newElement");

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "newElement"]
