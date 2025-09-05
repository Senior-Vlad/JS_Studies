/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */

const myString = "Hello, Vlad !";

console.log(myString instanceof String);
console.log(typeof myString === "string");

const myUpperCaseString = myString.toUpperCase();

console.log(myUpperCaseString);

function toUpperCase_Fun(myString) {
  //   if (!(myString instanceof String)) {
  //     throw new TypeError("Variable is not a String object !");
  //   }
  if (typeof myString !== "string") {
    throw new TypeError("Variable is not a string");
  }
  return myString.toUpperCase();
}

console.log(toUpperCase_Fun(myString));
