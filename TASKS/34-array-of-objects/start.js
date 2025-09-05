/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
const car = {
  carBrand: "BMW",
  price: 10000,
  isAvailableForSale: true,
};
const cars = [
  car,
  {
    carBrand: "Audi",
    price: 20000,
    isAvailableForSale: false,
  },
  {
    carBrand: "Toyota",
    price: 30000,
    isAvailableForSale: true,
  },
];
cars.push({
  carBrand: "Mercedes",
  price: 40000,
  isAvailableForSale: true,
});
console.log(cars);
