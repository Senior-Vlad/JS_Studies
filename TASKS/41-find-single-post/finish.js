/** ЗАДАЧА 41 - Поиск объектов в массиве
 *
 * 1. Создайте функцию "findPostById" с двумя параметрами:
 *  - ID поста
 *  - массив постов
 *
 * 2. Функция должна вернуть пост с определенным ID
 *
 * 3. Если поста с определенным ID в массиве постов нет,
 * функция должна вернуть "undefined"
 *
 * 4. Также внутри функции выведите в консоль ID поста
 */

function findPostById(postIdx, arr) {
  for (const object of arr) {
    if (object.postId === postIdx) {
      return object;
    }
  }
  // for(... of arr) - це класичний цикл, який перебирає масив. а for(... in arr) - це цикл, який перебирає властивості об'єкта.
  /*
  Приклади for in та for of:
  for (const key in object) {
    console.log(key, object[key]);// виведе ключ та значення властивості об'єкта
  }

  for (const value of array) {
    console.log(value);
  }
  */
  /*
   return arr.find((post) => post.postId === postId);
   */
}

const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
];

console.log(findPostById(6134, posts)); // { postId: 6134, commentsQuantity: 2 }

console.log(findPostById(4511, posts)); // undefined
