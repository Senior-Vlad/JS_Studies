/** ЗАДАЧА 63 - Зона видимости функции
 *
 * Что будет выведено в консоль?
 * Ответьте на вопрос без запуска кода
 */
// "use strict";
const b = 2;
let d = 15;

function myFn1(a) {
  let b;
  let d = 10;
  myFn2(b);
}

function myFn2(a) {
  let c = 5;
  console.log(a, b, c, d);
}

myFn1();
// undefined 2 5 15
//undefined because in function Fn1, it creates it's own scope for variables. So b, in myFn1, in undefined, d = 10.
// When we call myFn2(b) in myFn1, b is sent as undefined, so in myFn2, console.log(a,b,c,d); gives us undefined, 2, 5, 15
// a takes value from b(myFn1), b in myFn2 uses the outer scoped b, which equals 2, c takes value from inned scoped c value, which equals 5,
// and d takes value from outer scoped d, which equals 15.
