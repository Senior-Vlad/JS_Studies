const getData = async (url) => {
  const res = await fetch(url);
  // if on any of those steps an error occurs, Promise, that returns this function will be automatically rejected,
  //  with the corresponding error, that occured on certain step.
  const json = await res.json();
  return json;
};

const url = "https://jsonplaceholder.typicode.com/posts/1";

const data = await getData(url); // only inside async function (await). But here we still don't catch any errors, we don't have try/catch
//So
try {
  const data2 = await getData(url);
  console.log(data2);
} catch (error) {
  console.log("Error:", error, error.message);
}

//Every await should be wrapped in try/catch

/* instead of this: 
const getData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });
};



getData("https://jsonplaceholder.typicode.com/posts/1")
   .then((data) => console.log(data))
   .catch((error) => console.log("Error:", error, error.message));
*/

/*
Main in Async/Await
1.Async/Await is a syntax sugar built on top of Promises.
It allows us to write asynchronous code in a more synchronous fashion.
2. await syntax is allowed only inside async functions.
3. async function always returns a Promise.
4. async function waits the result of instruction await and will not continue the upcoming instructions until the Promise is resolved or rejected.
Additional: 
If the async function throws an error, the Promise will be rejected.
Every await should be wrapped in try/catch.
*/
//React, Angular, Vue.js
