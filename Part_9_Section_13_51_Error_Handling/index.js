const fnWithError = () => {
  //   console.log("This function will throw an error.");
  throw new Error("This is an error");
};

// fnWithError(); //not handled (uncaught!)
// console.error(
//   "This will not be logged because the error above stops execution."
// );

//So, we have to handle errors properly using try...catch

const fnWithErrorHandled = () => {
  try {
    console.log(5 + 5); // This will be logged
    fnWithError();
    console.log(5 + 5); // This will not be logged
  } catch (error) {
    // console.error(error);
    console.log("Error caught:", error.message);
  }
};
fnWithErrorHandled();
console.log("This will be logged after the error is handled.");
