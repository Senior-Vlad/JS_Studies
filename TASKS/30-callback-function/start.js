/** ЗАДАЧА 30 - Колбэк функция
 *
 * 1. Что будет выведено в консоль?
 * Постарайтесь ответить без запуска кода.
 *
 * 2. Нужно ли как-то исправить этот код?
 */

// setTimeout(function myFn() {
//   console.log("Привет из функции myFn");
// }, 2000);

// myFn();
// Uncaught ReferenceError: myFn is not defined

function myFn() {
  setTimeout(() => {
    console.log("Привет из функции myFn");
  }, 2000);
}
myFn();
