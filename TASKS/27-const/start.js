/** ЗАДАЧА 27 - Const
 *
 * Ответьте на следующие вопросы:
 *   1. Почему после 13 строки не выдается ошибка?
 *   2. Почему после строки 18 генерируется TypeError?
 *
 * Измените одну строку кода, чтобы эта ошибка исчезла.
 * Не меняйте строки 13, 18
 */

let arr = [1, 2]; // <-- Объявление переменной используя const -> let (for working line nr 18)

arr.push(3); //Because despite we have const arr, we can still modify its contents via its methods (as we do here - arr.push(3))

console.log(arr);
// [1, 2, 3]

arr = [1, 2, 3, 4];
//Because we are reassigning the variable arr, which is not allowed for const variables.
// ДО: Uncaught TypeError: Assignment to constant variable.
// ПОСЛЕ: Нет ошибки

console.log(arr);
// [1, 2, 3, 4]
