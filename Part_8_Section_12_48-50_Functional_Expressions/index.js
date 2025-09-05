function myFN(a, b) {
  return a + b;
}
// function(a, b) {/* anonymous function. */
//   return a + b;
// }
/*
 declared function, functional expression
 has a name: y | n
 can be used autonomously: y | n
 can be set to the variable: y | y
 can be used as an argument in another function: y | y
 */
const myFunction = function (a, b) {
  console.log(a + b);
  return a + b;
};
// So, myFunction is a functional expression
myFunction(2, 3); // 5
// How to use functional expressions as a callback function
// setTimeout(myFunction, 1000);// NaN, explanation comes later
setTimeout(function () {
  console.log("Delayed message");
}, 1000);

/* Arrow function (expression)
    (a,b) => {
      console.log(a + b);
      return a + b;
    }
 */
const myFunctionArrow = (a, b) => {
  console.log(a + b);
  return a + b;
};
myFunctionArrow(5, 3);

setTimeout(() => {
  console.log("Delayed message num 2");
}, 2000);

// If arrow function has only 1 parameter, then we can write it like this
const mySingleParamFunction = (a) => {
  console.log(a);
  return a; // return is needed
};
//Also, if arrow function has only 1 action, we can omit the curly braces and the return statement
const mySingleParamFunction2 = (a) => a + 5; // === return a + 5;
/***********************************/

//Function parameters value by default
const myFunctionWithDefault = (a, b = 5) => {
  console.log(a + b);
  return a + b;
};
myFunctionWithDefault(2); // 7, b is set to 5 by default
myFunctionWithDefault(2, 3); // 5, b is set to 3

//Also
function multByFactor(value, multiplier) {
  if (multiplier === undefined) {
    multiplier = 2;
  }
  return value * multiplier;
}

console.log(multByFactor(5)); // 10, multiplier is set to 2 by default
console.log(multByFactor(5, 3)); // 15, multiplier is set to 3

const anonymousMultByFaction = (value, multiplier = 1) => value * multiplier;

const newPost = (post, addedAt = Date()) => ({
  //({...}) - not an explicit object creation
  ...post,
  addedAt, //or addedAt: addedAt
});
// So, we don't modify the original post object, but create new with new properties
const firstPost = {
  id: 1,
  author: "John Doe",
};
newPost(firstPost); //const firstPostWithDate = newPost(firstPost)
