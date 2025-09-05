/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
  sum() {
    return this.filter((value) => typeof value === "number").reduce(
      (acc, value) => {
        acc += value;
        return acc;
      },
      0
    );
  }
  onlyNumbers() {
    return this.filter((value) => typeof value === "number").map((value) => {
      return value;
    });
  }
}

myArray1 = new ExtendedArray(1, 2, 3, 5, 10);
myArray2 = new ExtendedArray("abc", 55, 100, 0, "cba");
myArray3 = new ExtendedArray(null, 66, 4, 6, 99, undefined, "heelo");
console.log(myArray1.sum());
console.log(myArray2.sum());
console.log(myArray3.sum());
// console.log(myArray1.onlyNumbers());
// console.log(myArray2.onlyNumbers());
// console.log(myArray3.onlyNumbers());
const newNumberArray1 = myArray1.onlyNumbers();
console.log(newNumberArray1);
const newNumberArray2 = myArray2.onlyNumbers();
console.log(newNumberArray2);
const newNumberArray3 = myArray3.onlyNumbers();
console.log(newNumberArray3);
newNumberArray3.forEach((value) => console.log(value * 2));
