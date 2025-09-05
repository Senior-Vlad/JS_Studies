/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10;
let myVariable2 = "5";

myVariable1 <= myVariable2 ? console.log(true) : console.log(false);

myVariable1 = Number(myVariable1);
myVariable2 = Number(myVariable2);

// Напишите код здесь

myVariable1 = "20";
myVariable2 = 100;

console.log(parseInt(myVariable1) <= parseInt(myVariable2));

// Напишите код здесь
