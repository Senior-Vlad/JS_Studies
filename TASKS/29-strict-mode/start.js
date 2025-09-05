/** ЗАДАЧА 29 - Строгий режим
 *
 * 1. Исправьте ошибку, которая возникает при включенном строгом режиме
 *
 * 2. Что будет, если отключить строгий режим?
 */

"use strict";
//"use strict" prevents using undeclared variables. If not used and we would try to assign a value to
// not declared variable yet - it would be created globally, but still won't be accessible on upper level (for modifications).
//  But in strict mode, it will throw an error - preventing us from using undeclared variables.
function myFunction() {
  // a = 2;
  const a = 2;
  return a;
}

const b = myFunction();
console.log(b + 5);
