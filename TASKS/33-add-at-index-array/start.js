/** ЗАДАЧА 33 - Добавление элемента по определенному индексу
 *
 * 1. Добавить элемент "abc" с индексом 10.
 *
 * 2. Выведите результирующий массив в консоль. Объясните результаты.
 *
 * 3. Какова длина конечного массива?
 */

const myArray = [1, 2];
myArray[10] = "abc";
console.log(myArray, myArray.length); // [1, 2, <empty>, <empty>, <empty>, <empty>, <empty>, <empty>, <empty>, <empty>, "abc"] 11
//It's because we assigned a value to an index that is not contiguous with the existing elements, so "holes" are created and the length becomes 11.
