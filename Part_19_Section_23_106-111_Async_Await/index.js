//Async/Await - syntactic sugar over promises
// It allows us to write asynchronous code in a more synchronous fashion
// It makes the code easier to read and maintain

// The 'async' keyword is used to declare an asynchronous function
// The 'await' keyword is used to wait for a promise to resolve

// Example:

// async function asyncFn() {
//   // always returns Promise
// }
const asyncFn = async () => {
  // always returns Promise
  return "Success!";
  /**
   Prototype: Promise
   PromiseState: "fulfilled"
   PromiseResult: "Success!"
   */
};
asyncFn();

asyncFn().then((result) => console.log(result));

const asyncFn1 = async () => {
  throw new Error("Something went wrong");
};

asyncFn1()
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message, "\n", "error"));

const asyncFn2 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

asyncFn2().then(() => console.log("Async function 2 completed"));

const timerPromise = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      return resolve("Timer completed");
    }, 2000);
  });
};

const asyncFun = async () => {
  console.log("Timer starts");
  const startTime = performance.now(); // returns timestamp in milliseconds
  await timerPromise(); //waits for 2 seconds, after which next lines are executed
  const endTime = performance.now();
  console.log("Timer completed:", (endTime - startTime).toFixed(2), "ms");
};

asyncFun();
// async function fetchData() {
//   try {
//     const data12 = await getDataObj.getData(
//       "https://jsonplaceholder.typicode.com/posts/12"
//     );
//     console.log("Success !", data12);
//   } catch (error) {
//     console.log("Error has been occurred:", error);
//   }
// }

// fetchData();
