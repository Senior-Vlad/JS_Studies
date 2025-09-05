/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */
const lineT = "string";
const numberT = 45;
const logicT = true;
const nothingT = null;
const emptyT = undefined;
const objectT = {
  a: 15,
  b: "I am b",
};
const arrayT = [lineT, numberT, logicT, nothingT, emptyT, objectT];
console.log(
  typeof lineT,
  typeof numberT,
  typeof logicT,
  typeof nothingT,
  typeof emptyT,
  typeof objectT,
  objectT,
  arrayT
);
