import getDataObj from "./index2.js";
// Promises: A Promise is an object that represents the eventual completion (or failure)
// of an asynchronous operation and its resulting value.
// Promises help manage delayed in time events.

// Promise it's a swear word for "I promise to deliver the result later, in some time", then to process the result when it's ready.
// example: request to foreign API, server response, database query

// Promise can return an error, if the asynchronous operation fails and that error still has to be handled.

// States of Promise:
// - Pending: initial state, neither fulfilled nor rejected. waiting
// - Fulfilled: meaning that the operation completed successfully and we receive the result.
// - Rejected: meaning that the operation failed and we receive the error.

//Let's create a Promise
const myPromiseOne = new Promise((resolve, reject) => {
  /*
Implementation of async operations

Inside this function, eventually, we have to call resolve (success) or reject (error)
pending -> resolve 
or
pending -> reject
*/
});

myPromiseOne
  .then((value) => {
    /*
Operations in case of successful promise implementation
value - the parameter that was passed to resolve() inside the Promise
*/
  })
  .catch((error) => {
    /*
Operations in case of rejected promise implementation
error - the parameter that was passed to reject() inside the Promise
*/
  });

fetch("https://jsonplaceholder.typicode.com/posts/1") //returns promise | fetch only is supported on browsers. On Node.js we need to use a library like node-fetch
  .then((response) => {
    console.log(response);
    return response.json(); //body - ReadableStream, which we need to call another method to convert Stream into JSON and JSON into JS object or array
  }) //if fulfilled this line executes. json() returns promise as well
  .then((json) => console.log(json)) // then, if json() fulfilled - this line executes
  .catch((error) =>
    console.error("Error fetching data:", error.message, "\n", error)
  ); // if on any stage we received reject -> this line executes

// const myPromise = new Promise((resolve, reject) => {
//   const success = true; // Simulate success or failure
//   if (success) {
//     resolve("Operation successful!");
//   } else {
//     reject("Operation failed.");
//   }
// });

// // Handling the Promise
// myPromise
//   .then((result) => {
//     console.log(result); // This will run if the Promise is fulfilled
//   })
//   .catch((error) => {
//     console.error(error); // This will run if the Promise is rejected
//   });

getDataObj
  .getData("https://jsonplaceholder.typicode.com/posts/12")
  .then((data) => {
    console.log("Success !", data);
  })
  .catch((error) => console.log("Error has been occurred:", error));
getDataObj
  .getData("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log("Success !", data)) //a result of successful promise
  .catch((error) => console.log(error.message, "\n", error)); //a result of rejected promise
//(we decide what we do in case of success or failure inside then or catch  after calling the getData function)

// Promise.all([getDataObj.getData(url12), getDataObj.getData(url1)])
//   .then(([d12, d1]) => {
//     console.log('12', d12);
//     console.log('1', d1);
//   })
//   .catch((err) => console.error(err));
