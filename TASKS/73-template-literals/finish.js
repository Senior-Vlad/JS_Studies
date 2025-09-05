/** ЗАДАЧА 73 - Шаблонные строки
 *
 * Создайте функцию "carInfo", которая возвращает информацию о машине:
 *  - Автомобиль считается дешевым, если его цена <= 20000
 *  - Автомобиль считается дорогим, если его цена > 20000
 *
 * Выводы в консоли должны совпадать с теми, которые в конце задачи
 */

const cars = [
  { brand: "Honda", price: 13000 },
  { brand: "Rolls-Royce", price: 120000 },
];
// function carInfo(carObj) {
//   return (
//     `The price of ${carObj.brand} car is ${carObj.price} and this is ` +
//     (carObj.price <= 20000 ? `a cheap` : `an expensive`) +
//     ` car`
//   );
// }
function carInfo({ brand, price }) {
  return (
    `The price of ${brand} car is ${price} and this is ` +
    (price <= 20000 ? `a cheap` : `an expensive`) +
    ` car`
  );
}

// function carInfo() {
//   const { brand, price } = arguments[0];
//   return (
//     `The price of ${brand} car is ${price} and this is ` +
//     (price <= 20000 ? `a cheap` : `an expensive`) +
//     ` car`
//   );
// }

// Создайте функцию "carInfo" здесь

cars.forEach((car) => console.log(carInfo(car)));
// Цена автомобиля Honda - 13000$ и это дешёвая машина
// Цена автомобиля Rolls-Royce - 120000$ и это дорогая машина
