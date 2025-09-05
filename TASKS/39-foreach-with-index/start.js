/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ["London", "New York", "Singapore"];

function cityInfo(city, index) {
  return `${city} is at the ${index} in the myCities array`;
}
//forEach(currentValue,index,array); (currentValue) (currentValue, index) (currentValue,index,array)
myCities.forEach((city, index) => {
  console.log(cityInfo(city, index));
});

// function cityInfo({ city123, index321 }) {
//   return `${city123} is at the ${index321} in the myCities array`;
// }
// //forEach(currentValue,index,array); (currentValue) (currentValue, index) (currentValue,index,array)
// myCities.forEach((city, index) => {
//   console.log(cityInfo({ index321: index, city123: city }));
// });
