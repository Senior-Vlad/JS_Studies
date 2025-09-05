/** ЗАДАЧА 57 - Трансформация массива объектов
 *
 * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
 *
 * 2. Обратите внимание, что
 *  - некоторые имена свойств в каждом сообщении изменены
 *  - ID каждого сообщения увеличен на 1000
 *
 * 3. Исходный массив постов должен остаться без изменений
 */

function processPosts(postObject) {
  const tempObj = postObject.map((p) => {
    return {
      postId: p.postId + 1000,
      postAuthor: p.author,
      postCommentsQty: p.commentsQty !== undefined ? p.commentsQty : 0,
    };
  });
  return tempObj;
}

/*
function processPosts(object) {
  return object.reduce((array, objVar) => {
    const { postId, author: postAuthor, commentsQty: postCommentsQty } = objVar;
    array.push({
      postId: postId + 1000,
      postAuthor,
      postCommentsQty: postCommentsQty ?? 0,
    });
    return array;
  }, []);
}
*/

const testPosts = [
  {
    postId: 234,
    author: "robd",
    commentsQty: 5,
  },
  {
    postId: 823,
    author: "sady",
  },
  {
    postId: 161,
    author: "merryl",
    commentsQty: 8,
  },
];

const processedPosts = processPosts(testPosts);
console.log(processedPosts);
/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/

console.log(testPosts);
// оригинальный массив должен остаться без изменений
