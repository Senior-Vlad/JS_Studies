/** ЗАДАЧА 47 - Использование метода "reduce" для создания массива
 *
 * 1. Создайте функцию "popularPostsIds" с двумя параметрами "posts" и "minimalComentsQty"
 *
 * 2. Эта функция "popularPostsIds" должна возвращать массив идентификаторов постов сообщений,
 * у которых количество комментариев не меньше "minimalComentsQty"
 */

function popularPostsIds(posts, minimalComentsQty) {
  // let tempArr = [];
  // posts.map((element) => {
  //   if (element.comments >= minimalComentsQty) {
  //     tempArr.push(element.postId);
  //   }
  // });
  // return tempArr;
  //acc(postsId) - transfers from first callback func to another
  // const popularPostsIds = (posts, min) =>
  // posts.filter(p => p.comments >= min).map(p => p.postId);
  return posts.reduce((postsId, post) => {
    return post.comments >= minimalComentsQty
      ? [...postsId, post.postId] //postsId.concat([post.postId])
      : postsId;
    // if post.comments >= minimalComentsQty then we take postsId and pushing into it the post.postId value. If < then we transfer the same, not modified array (in out case)
  }, []);
}
//return arr.reduce((acc,element)=>{},var). var - starting value of acc variable. this value will transfer from one callback call to another.
//  final value of acc will be transfered to the innitial return. as a result

const inputPosts = [
  {
    title: "Как быстро выучить JavaScript?",
    postId: 3421,
    comments: 25,
  },
  {
    title: "Где используется JavaScript?",
    postId: 5216,
    comments: 3,
  },
  {
    title: "Какая разница между React и Angular?",
    postId: 8135,
    comments: 12,
  },
];

// console.log(inputPosts.push(1));//4

console.log(popularPostsIds(inputPosts, 10)); // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)); // [3421]

console.log(popularPostsIds(inputPosts, 50)); // []
