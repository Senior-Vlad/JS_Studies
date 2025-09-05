/*
if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
}
*/
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("Enter a number: ", (input) => {
//   const num = Number(input);
//   console.log("You entered: " + num);
//   rl.close();
// });
let val = 10;
if (val > 5) {
  val += 20;
}

console.log(val); // 30

const person = {
  age: 20,
  name: "John",
};
if (!person.isEmployed) {
  // person.isEmployed === undefined
  console.log("Person turned out to be unemployed.");
  person.isEmployed = false;
  console.log("Person's employment status updated to:", person.isEmployed);
}
console.log(person);
if (person.isEmployed === undefined) {
  console.log("Person's employment status is undefined.");
} else {
  console.log("Person's employment status is defined.");
}

person.isEmployed = true;

if (person.salary === undefined && person.isEmployed) {
  console.log(
    "Person is employed, but without a salary.\nSetting the minimum salary."
  );
  person.salary = 1200;
} else if (person.salary !== undefined) {
  console.log(
    "Person is employed and has defined salary.\nRaising salary by 10%."
  );
  person.salary *= 1.1;
}

console.log(person);

const age = 18;

if (age >= 18) {
  console.log("Person is an adult.");
} else if (age >= 13 && age < 18) {
  console.log("Person is a teenager.");
} else {
  console.log("Person is a child.");
}

/*********************************************/

const sumPositiveNumbers = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid input";
  }
  if (a <= 0 || b <= 0) {
    return "Both numbers must be positive";
  }
  return a + b;
};
console.log(sumPositiveNumbers(5, 10));
console.log(sumPositiveNumbers(-5, 10));
console.log(sumPositiveNumbers(5, -10));
const number = {
  a: 5,
  b: 10,
};
console.log(sumPositiveNumbers(number.a, number.b));
console.log(sumPositiveNumbers(5, number));
console.log(sumPositiveNumbers(number));

// SWITCH

/**
 switch(expression){
 case value:
   // code to execute if expression === value
   break;
 case value2:
   // code to execute if expression === value2
   break;
 default:
   // code to execute if expression doesn't match any case
 }
 */

const month = 8;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid month");
    break;
}
