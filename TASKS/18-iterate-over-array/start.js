/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */
const myArray = [10, "bro", true, "car"];
myArray.forEach((element) => console.log(element));
myArray.map((element) => console.log(element + " map method"));
